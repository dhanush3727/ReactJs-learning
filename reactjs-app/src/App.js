import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todolist"))
  );

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItem = [...items, addNewItem];
    setItems(listItem);
    localStorage.getItem("todolist", JSON.stringify(listItem));
  };

  const handleCheck = (id) => {
    const listItems = items.map(
      (item) => (item.id === id ? { ...item, checked: !item.checked } : item) //The ...item is take the all item properties
    );
    setItems(listItems);
    localStorage.setItem("todolist", JSON.stringify(listItems));
  };
  const handleDel = (id) => {
    const listItem = items.filter((item) => item.id !== id);
    setItems(listItem);
    localStorage.setItem("todolist", JSON.stringify(listItem));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem("");
  };
  return (
    <div className="App">
      <Header title="To do List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )} //We don't write setItems, because we already declared in functions
        handleCheck={handleCheck}
        handleDel={handleDel}
      />
      <Footer
        // we transfer the content data in footer
        length={items.length}
      />
    </div>
  );
}
export default App;

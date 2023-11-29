import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import AddItem from "./AddItem";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Practice Coding",
    },
    {
      id: 2,
      checked: false,
      item: "Learn English",
    },
    {
      id: 3,
      checked: false,
      item: "Playing Cricket",
    },
  ]);
  const handleCheck = (id) => {
    const listItems = items.map(
      (item) => (item.id === id ? { ...item, checked: !item.checked } : item) //The ...item is take the all item properties
    );
    setItems(listItems);
  };
  const handleDel = (id) => {
    const delList = items.filter((item) => item.id !== id);
    setItems(delList);
  };
  return (
    <div className="App">
      <Header title="To do List" />
      <AddItem />
      <Content
        items={items} //We don't write setItems, because we already declared in functions
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

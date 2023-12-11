import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest";

function App() {
  // fetch API
  const API_URL = "http://localhost:3500/items";
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  //Throw the error that means show what the error in this page
  const [fetchItem, setFetchItem] = useState(null);
  //Load a data
  const [isLoading, setIsLoading] = useState(true);

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItem = [...items, addNewItem];
    setItems(listItem);
    // localStorage.getItem("todolist", JSON.stringify(listItem))- we get the data in server so we don't use local storage

    //CRUD OPERTION - It is a R-Read Operation
    const postOption = {
      method: "POST", //post method add a item
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewItem),
    };
    const result = await apiRequest(API_URL, postOption);
    if (result) {
      setFetchItem(result);
    }
  };
  const handleCheck = async (id) => {
    const listItems = items.map(
      (item) => (item.id === id ? { ...item, checked: !item.checked } : item) //The ...item is take the all item properties
    );
    setItems(listItems);
    // localStorage.setItem("todolist", JSON.stringify(listItems));
    //CRUD Operation - It is U - Update Operation
    const myItem = listItems.filter((item) => item.id === id);
    const updateOption = {
      method: "PATCH", //Patch method update a item
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOption);
    if (result) {
      setFetchItem(result);
    }
  };
  const handleDel = async (id) => {
    const listItem = items.filter((item) => item.id !== id);
    setItems(listItem);
    // localStorage.setItem("todolist", JSON.stringify(listItem));
    //CRUD Operation - It is a D - Delete
    const deleteOption = {
      method: "DELETE",
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOption);
    if (result) {
      setFetchItem(result);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem("");
  };
  // UseEffect Hook with fetch API - get a data from server
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw Error("Data Not Received");
        }
        const listItem = await response.json();
        setItems(listItem);
        setFetchItem(null);
      } catch (err) {
        setFetchItem(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    // Set a time for load a data
    setTimeout(() => {
      (async () => await fetchItem())();
    }, 1000);
  }, []);

  return (
    <div className="App">
      <Header title="To do List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <main>
        {isLoading ? <p>Loading Items...</p> : null}
        {fetchItem ? <p>{`Error : ${fetchItem}`}</p> : null}
        {!fetchItem && !isLoading && (
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )} //We don't write setItems, because we already declared in functions
            handleCheck={handleCheck}
            handleDel={handleDel}
          />
        )}
      </main>
      <Footer
        // we transfer the content data in footer
        length={items.length}
      />
    </div>
  );
}
export default App;

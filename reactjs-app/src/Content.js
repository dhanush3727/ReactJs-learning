import React from "react";
import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDel }) => {
  // const [person, setPerson] = useState("Dhanush");
  // function randomNames() {
  //   setPerson(() => {
  //     const names = [
  //       "Aakash",
  //       "Anbu",
  //       "Andruse",
  //       "Charis",
  //       "Dhivakar",
  //       "Joseph",
  //     ];
  //     const int = Math.floor(Math.random() * 4);
  //     return names[int];
  //   });
  // }
  // Click event with event parameter
  // const handleClick = (e) => {
  //   console.log(e.target.innerText);
  // };
  // Click event with parameter
  // const handleClickTwo = (person) => {
  //   console.log(`Hello ${person} Welcome to my site`);
  // };
  // const [count, setCount] = useState(99);
  // function increment() {
  //   setCount(() => {
  //     return count + 1;
  //   });
  // }
  // function decrement() {
  //   setCount(() => {
  //     return count - 1;
  //   });
  // }

  return (
    <main>
      {/*<p>Hi {person} Welcome</p>
       click event 
       <button onClick={() => handleClickTwo("Dhanush")}>Click me</button>
       <button onClick={() => decrement()}>-</button>
      <span>{count}</span>
      <button onClick={() => increment()}>+</button> 
      <button onClick={() => randomNames()}>Click Me</button> */}
      {items.length ? (
        <ItemList
          items={items} //We don't write setItems, because we already declared in functions
          handleCheck={handleCheck}
          handleDel={handleDel}
        />
      ) : (
        <p>Your list is Empy</p>
      )}
    </main>
  );
};

export default Content;

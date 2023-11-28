import React from "react";
import { useState } from "react";

const Content = () => {
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
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Practice Coding",
    },
    {
      id: 2,
      checked: true,
      item: "Learn English",
    },
    {
      id: 2,
      checked: true,
      item: "Playing Cricket",
    },
  ]);
  return (
    <main>
      {/*<p>Hi {person} Welcome</p>
       click event 
       <button onClick={() => handleClickTwo("Dhanush")}>Click me</button>
       <button onClick={() => decrement()}>-</button>
      <span>{count}</span>
      <button onClick={() => increment()}>+</button> 
      <button onClick={() => randomNames()}>Click Me</button> */}
      <ul>
        {items.map((item) => (
          <li>
            <input type="checkbox" checked={item.checked} />
            <label htmlFor="">{item.item}</label>
            <button className="btn">Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;

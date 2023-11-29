import React from "react";
import LineItem from "./LineItem";

const ItemList = ({ items, handleCheck, handleDel }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item} //We don't write setItems, because we already declared in functions
          handleCheck={handleCheck}
          handleDel={handleDel}
        />
      ))}
    </ul>
  );
};

export default ItemList;

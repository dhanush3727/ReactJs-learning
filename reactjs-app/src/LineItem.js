import React from "react";

const LineItem = ({ item, handleCheck, handleDel }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      <button className="btn" onClick={() => handleDel(item.id)}>
        Delete
      </button>
    </li>
  );
};

export default LineItem;

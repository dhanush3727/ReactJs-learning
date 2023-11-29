import React from "react";

const AddItem = () => {
  return (
    <form action="" className="addForm">
      <label htmlFor="addItem">Add Item</label>
      <input autoFocus type="text" placeholder="Add Item" required />
      <button className="addBtn" type="submit" aria-label="Add Item">
        +
      </button>
    </form>
  );
};

export default AddItem;

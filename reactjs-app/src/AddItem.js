import React from "react";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form action="" className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className="addBtn" type="submit" aria-label="Add Item">
        +
      </button>
    </form>
  );
};

export default AddItem;

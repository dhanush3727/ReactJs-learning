import React from "react";
import { useRef } from "react";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form action="" className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        ref={inputRef}
        autoFocus
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        onClick={() => inputRef.current.focus()}
        className="addBtn"
        type="submit"
        aria-label="Add Item"
      >
        +
      </button>
    </form>
  );
};

export default AddItem;

import { useState } from "react";

function NewTodoForm(props) {
  const [newItem, setNewItem] = useState("");
  const onSubmit = props.onSubmit;

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            type="text"
            onChange={(e) => setNewItem(e.target.value)}
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
    </>
  );
}

export default NewTodoForm;

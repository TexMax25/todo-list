import React from "react";
import { useState } from "react";
import "../stylesheets/Todo.css";

const Todo = ({ item, onUpdate, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);
    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      const value = e.target.value;

      setNewValue(value);
    }

    function handleClickUpdate() {
      onUpdate(item.id, newValue);
      setIsEdit(false);
    }

    return (
      <form className="todo-update-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input-update"
          onChange={handleChange}
          value={newValue}
        />
        <button className="button edit-button" onClick={handleClickUpdate}>
          Update
        </button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="todo-info">
        <h2>{item.title}</h2>
        <button
          onClick={() => {
            setIsEdit(true);
          }}
          className="button edit-button"
        >
          Edit
        </button>
        <button
          className="button delete-button"
          onClick={(e) => {
            onDelete(item.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  }

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
};

export default Todo;

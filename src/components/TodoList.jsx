import React from "react";
import { useState } from "react";
import Todo from "./Todo";
import "../stylesheets/TodoList.css"

const TodoList = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(event) {
    const value = event.target.value;

    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    const temp = [...todos];
    temp.unshift(newTodo);

    setTodos(temp);

    setTitle("");
  }

  function handleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);
  }

  function handleDelete(id) {
    const temp = todos.filter((item) => item.id !== id);
    setTodos(temp);
  }

  return (
    <div className="main-container">
      <form className="todo-creater-form" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="todo-input" value={title} />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Create Todo"
          className="button-create"
        />
      </form>

      <div className="todo-container">
        {todos.map((item) => (
          <Todo
            item={item}
            key={item.id}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

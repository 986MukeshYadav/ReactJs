import { useState } from "react";
import "./Todo.css";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    if (tasks.includes(inputValue)) {
      setInputValue("");
      return;
    }

    setTasks((prevTasks) => [...prevTasks, inputValue]);
    setInputValue("");
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          value={inputValue}
          onChange={(event) => handleInputChange(event.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </section>
  );
};

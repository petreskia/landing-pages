import React, { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";

interface Todo {
  id: string;
  title: string;
  completed?: boolean;
}

const App: React.FC = () => {
  // Load todos from localStorage when the component mounts
  const loadTodosFromLocalStorage = (): Todo[] => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  };

  const [showInput, setShowInput] = useState<boolean>(true);
  const [todosList, setTodosList] = useState<Todo[]>(
    loadTodosFromLocalStorage()
  );
  const [inputValue, setInputValue] = useState<string>("");

  // Save todos to localStorage whenever todosList changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todosList));
  }, [todosList]);

  const handleComplete = (id: string) => {
    setTodosList(
      todosList.map((todo) => {
        return todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo;
      })
    );
  };

  const handleDelete = (
    id: string,
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setTodosList(todosList.filter((todo) => todo.id !== id));
  };

  const handleAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue) {
      setTodosList([...todosList, { id: uuid(), title: inputValue }]);
      setInputValue("");
    }
  };

  return (
    <div id="container" className="App">
      <h1>
        To-Do List
        <i
          className="fa fa-toggle-on"
          id="kopce"
          aria-hidden="true"
          onClick={() => setShowInput(!showInput)}
        ></i>
      </h1>
      <input
        type="text"
        placeholder="Add New Todo"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyUp={handleAdd}
        className={showInput ? "" : "hideInput"}
      />
      <ul>
        {todosList.map(({ title, id, completed }) => (
          <li
            key={id}
            className={`el ${completed && "crossed"}`}
            onClick={() => handleComplete(id)}
          >
            <span className="trash" onClick={(e) => handleDelete(id, e)}>
              <i className="fa fa-trash"></i>
            </span>
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

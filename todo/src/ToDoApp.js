import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() === '') return;

    const newTodo = { id: Math.random(), text: input, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo].sort((a, b) => a.text.localeCompare(b.text)));

    setInput('');
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            onRemove={removeTodo}
            onToggleCompleted={toggleCompleted}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;

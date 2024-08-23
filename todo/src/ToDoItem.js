import React from 'react';

function ToDoItem({ todo, onRemove, onToggleCompleted }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleCompleted(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>Delete</button>
    </li>
  );
}

export default ToDoItem;

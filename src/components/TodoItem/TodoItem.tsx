import React from 'react';

import styles from './TodoItem.module.css'
import { useTodoContext } from '../../context/useTodoContext';
import { Todo } from '../../context/TodoTypes';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, removeTodo } = useTodoContext();

  return (
    <li className={styles.item}>
      <label className={styles.label}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className={styles.checkbox}
        />
        <span className={`${styles.itemText} ${todo.completed ? styles.itemTextCompleted : ''}`}>
          {todo.text}
        </span>
      </label>
      <button className={styles.deleteButton} onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
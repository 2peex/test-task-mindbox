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
      <span
        className={`${styles.itemText} ${todo.completed ? styles.itemTextCompleted : ''}`}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button className={styles.removeButton} onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
};

export default TodoItem;
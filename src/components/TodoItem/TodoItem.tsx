import React from "react";
import { useTodoContext } from "../../context/useTodoContext";
import { TodoItemProps } from "../../types";
import styles from "./TodoItem.module.scss";
import { TEXTS, STYLES } from "../../constants";

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
        <span
          className={`${styles.itemText} ${
            todo.completed
              ? styles[STYLES.ITEM_TEXT_COMPLETED]
              : TEXTS.EMPTY_STROKE
          }`}
        >
          {todo.text}
        </span>
      </label>
      <button
        className={styles.deleteButton}
        onClick={() => removeTodo(todo.id)}
      >
        {TEXTS.ITEM.DELETE}
      </button>
    </li>
  );
};

export default TodoItem;

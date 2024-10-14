import React from "react";
import { TodoForm } from "../TodoForm";
import TodoList from "../TodoList/TodoList";
import styles from "./TodoApp.module.css";

const TodoApp: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>todos</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoApp;

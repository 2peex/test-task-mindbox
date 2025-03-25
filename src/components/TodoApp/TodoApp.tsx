import React from "react";
import styles from "./TodoApp.module.scss";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList";
import { APP } from "../../constants";

const TodoApp: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{APP.TITLE}</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoApp;

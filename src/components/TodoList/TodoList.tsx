import React, { useState } from "react";
import { useTodoContext } from "../../context/useTodoContext";
import { TodoItem } from "../TodoItem";
import { TodoTabs } from "../TodoTabs";
import { motion } from "framer-motion";
import styles from "./TodoList.module.css";

const TodoList: React.FC = () => {
  const { todos, clearCompletedTodos } = useTodoContext();
  const [activeTab, setActiveTab] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (activeTab === "active") return !todo.completed;
    if (activeTab === "completed") return todo.completed;
    return true;
  });

  return (
    <div>
      <ul className={styles.list}>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <div className={styles.tabsContainer}>
        <TodoTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 200 }}
          className={styles.buttonClearCompleted}
          onClick={clearCompletedTodos}
        >
          Clear completed
        </motion.button>
      </div>
    </div>
  );
};

export default TodoList;

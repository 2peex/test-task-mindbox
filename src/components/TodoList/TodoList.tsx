import React, { useMemo, useState } from "react";
import { useTodoContext } from "../../context/useTodoContext";
import { TodoItem } from "../TodoItem";
import { TodoTabs } from "../TodoTabs";
import { motion } from "framer-motion";
import { TEXTS, ANIMATION } from "../../constants";
import styles from "./TodoList.module.scss";

const TodoList: React.FC = () => {
  const { todos, clearCompletedTodos } = useTodoContext();
  const [activeTab, setActiveTab] = useState(TEXTS.INITIAL_TABS_VALUE);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (activeTab === TEXTS.ACTIVE) return !todo.completed;
      if (activeTab === TEXTS.COMPLETED) return todo.completed;
      return true;
    });
  }, [todos, activeTab]);

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
          whileHover={ANIMATION.HOVER}
          whileTap={ANIMATION.TAP}
          transition={ANIMATION.SPRING}
          className={styles.buttonClearCompleted}
          onClick={clearCompletedTodos}
        >
          {TEXTS.BUTTONS.CLEAR_COMPLETED}
        </motion.button>
      </div>
    </div>
  );
};

export default TodoList;

import React, { useState } from "react";
import { useTodoContext } from "../../context/useTodoContext";
import {motion} from 'framer-motion'
import styles from "./TodoForm.module.css";

const TodoForm: React.FC = () => {
  const { addTodo } = useTodoContext();
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new task"
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 200 }}
        type="submit"
        className={styles.button}
      >
        Add task
      </motion.button>
    </form>
  );
};

export default TodoForm;

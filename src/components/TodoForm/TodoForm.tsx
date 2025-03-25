import React, { useState } from "react";
import { useTodoContext } from "../../context/useTodoContext";
import { motion } from "framer-motion";
import styles from "./TodoForm.module.scss";
import { TEXTS } from "../../constants";

const TodoForm: React.FC = () => {
  const { addTodo } = useTodoContext();
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === "") return;
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
        placeholder={TEXTS.PLACEHOLDER}
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 200 }}
        type="submit"
        className={styles.button}
      >
        {TEXTS.BUTTONS.BUTTON}
      </motion.button>
    </form>
  );
};

export default TodoForm;

import React, { useState } from 'react';
import { useTodoContext } from '../../context/useTodoContext';
import styles from './TodoForm.module.css'

const TodoForm: React.FC = () => {
  const { addTodo } = useTodoContext();
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(text);
    setText('');
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
      <button type="submit" className={styles.button}>Add</button>
    </form>
  );
};

export default TodoForm;
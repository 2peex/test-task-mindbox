import React, { useState } from "react";
import { useTodoContext } from "../../context/useTodoContext";
import { TodoItem } from "../TodoItem";
import styles from "./TodoList.module.css";
import { TodoTabs } from "../TodoTabs";

const TodoList: React.FC = () => {
  const { todos, clearCompletedTodos } = useTodoContext();
  const [activeTab, setActiveTab] = useState('all')

  const filteredTodos = todos.filter((todo) => {
    if (activeTab === 'active') return !todo.completed;
    if (activeTab === 'completed') return todo.completed;
    return true;
  })

  return (
    <div>
      <ul className={styles.list}>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <TodoTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
      <button onClick={clearCompletedTodos}>clear completed</button>
    </div>
  );
};

export default TodoList;

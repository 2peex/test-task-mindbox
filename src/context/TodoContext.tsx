import React, { createContext, useState } from 'react';
import { Todo, TodoContextType } from './TodoTypes';

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    if (text.trim() === '') return;
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };


  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo, clearCompletedTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
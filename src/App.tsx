import React from "react";
import { TodoProvider } from "./context/TodoContext";
import { TodoApp } from "./components/TodoApp";

const App: React.FC = () => {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
};

export default App;

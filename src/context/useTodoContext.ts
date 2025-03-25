import { useContext } from "react";
import { TodoContext } from "./TodoContext";
import { TodoContextType } from "../types";
import { ERRORS } from "../constants";

export const useTodoContext = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error(ERRORS.PROVIDER_ERROR_MESSAGE);
  }
  return context;
};

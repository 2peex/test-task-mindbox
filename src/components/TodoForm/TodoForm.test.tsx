import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoForm from "./TodoForm";
import { TodoContext } from "../../context/TodoContext";
import { TEXTS } from "../../constants";

describe("TodoForm", () => {
  it("should add a new todo", async () => {
    const mockAddTodo = vi.fn();

    render(
      <TodoContext.Provider
        value={{
          todos: [],
          addTodo: mockAddTodo,
          toggleTodo: vi.fn(),
          removeTodo: vi.fn(),
          clearCompletedTodos: vi.fn(),
        }}
      >
        <TodoForm />
      </TodoContext.Provider>
    );

    const input = screen.getByPlaceholderText(TEXTS.PLACEHOLDER);
    const button = screen.getByText(TEXTS.BUTTONS.BUTTON);

    await fireEvent.change(input, { target: { value: "New Task" } });
    await fireEvent.click(button);

    expect(mockAddTodo).toHaveBeenCalledWith("New Task");
    expect(input).toHaveValue("");
  });

  it("should not add empty todo", async () => {
    const mockAddTodo = vi.fn();

    const { container } = render(
      <TodoContext.Provider
        value={{
          todos: [],
          addTodo: mockAddTodo,
          toggleTodo: vi.fn(),
          removeTodo: vi.fn(),
          clearCompletedTodos: vi.fn(),
        }}
      >
        <TodoForm />
      </TodoContext.Provider>
    );

    const form = container.querySelector("form")!;
    const button = screen.getByText(TEXTS.BUTTONS.BUTTON);

    await fireEvent.submit(form);

    await fireEvent.click(button);

    expect(mockAddTodo).not.toHaveBeenCalled();
  });
});

import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoForm from './TodoForm';
import { TodoProvider } from '../../context/TodoContext';

const renderWithContext = (component: React.ReactNode) => {
  return render(
    <TodoProvider>
      {component}
    </TodoProvider>
  );
};

test('add a new todo', () => {

  renderWithContext(<TodoForm />);

  const input = screen.getByPlaceholderText('Enter a new task');
  const button = screen.getByText('Add task');

  fireEvent.change(input, { target: { value: 'New Task' } });

  fireEvent.click(button);

  expect(input).toHaveValue('');
});
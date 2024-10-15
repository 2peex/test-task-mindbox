import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoTabs from './TodoTabs';

test('switches tabs', () => {
  const setActiveTab = jest.fn();
  render(<TodoTabs activeTab="all" setActiveTab={setActiveTab} />);

  const allTab = screen.getByText('All');
  const activeTab = screen.getByText('Active');
  const completedTab = screen.getByText('Completed');

  fireEvent.click(activeTab);
  expect(setActiveTab).toHaveBeenCalledWith('active');

  fireEvent.click(completedTab);
  expect(setActiveTab).toHaveBeenCalledWith('completed');

  fireEvent.click(allTab);
  expect(setActiveTab).toHaveBeenCalledWith('all');
});
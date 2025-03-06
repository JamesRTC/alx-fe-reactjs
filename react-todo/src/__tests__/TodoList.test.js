import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList"; // Adjust the path based on your file structure

test("adds a new todo", () => {
  render(<TodoList />);

  // Find input field and button
  const input = screen.getByPlaceholderText("Add a new todo"); // Ensure your input has a placeholder
  const addButton = screen.getByText("Add");

  // Type a new todo
  fireEvent.change(input, { target: { value: "Learn React Testing" } });

  // Click the add button
  fireEvent.click(addButton);

  // Check if the new todo appears in the list
  expect(screen.getByText("Learn React Testing")).toBeInTheDocument();
});

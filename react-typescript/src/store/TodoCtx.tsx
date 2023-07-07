import React from "react";
import TodoClass from "../models/todos";

const TodoContext = React.createContext<TodoTypes>({
  items: [],
  addTodoItem: () => {},
  removeTodoItem: () => {},
});

export default TodoContext;

export type TodoTypes = {
  items: TodoClass[];
  addTodoItem: (value: string) => void;
  removeTodoItem: (id: string) => void;
};

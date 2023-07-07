import { ReactNode, useState } from "react";
import TodoContext, { TodoTypes } from "./TodoCtx";
import TodoClass from "../models/todos";

const TodoCtxProvider: React.FC<TodoDefaultProps> = (props) => {
  const [todo, setTodo] = useState<TodoClass[]>([]);

  const addTodoHandler = (value: string) => {
    const id = (Math.random() * 99999).toString();
    setTodo((prev) => [...prev, { id, text: value }]);
  };

  const removeTodoHandler = (id: string) => {
    const filterTodo = todo.filter((todo) => todo.id !== id);
    setTodo(filterTodo);
  };

  const value: TodoTypes = {
    items: todo,
    addTodoItem: addTodoHandler,
    removeTodoItem: removeTodoHandler,
  };
  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
};

export default TodoCtxProvider;

type TodoDefaultProps = {
  children: ReactNode;
};

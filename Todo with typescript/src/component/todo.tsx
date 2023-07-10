import React, { useContext } from "react";
import TodoClass from "../models/todos";
import TodoContext from "../store/TodoCtx";
import List from "./list";
import classes from "./todo.module.css";

const Todo: React.FC = () => {
  const { items, removeTodoItem } = useContext(TodoContext);
  return (
    <ul className={classes.todoList}>
      {items.map((item) => (
        <List
          key={item.id}
          name={item.text}
          onClickTodo={removeTodoItem.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todo;

// Not using now because i'm using the ctx
type PropsType = {
  items: TodoClass[];
  onRemoveTodo: (id: string) => void;
};

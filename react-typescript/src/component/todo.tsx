import React from "react";
import TodoClass from "../models/todos";
import List from "./list";

const Todo: React.FC<{ items: TodoClass[] }> = (props) => {
  console.log(props.items, props);
  return (
    <ul>
      {props.items.map((item) => (
        <List key={item.id} name={item.text} />
      ))}
    </ul>
  );
};
export default Todo;

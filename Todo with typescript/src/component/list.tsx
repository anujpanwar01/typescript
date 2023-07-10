import React from "react";
import classes from "./list.module.css";

const List: React.FC<{ name: string; onClickTodo: () => void }> = ({
  name,
  onClickTodo,
}) => (
  <li className={classes.item} onClick={onClickTodo}>
    {name}
  </li>
);

export default List;

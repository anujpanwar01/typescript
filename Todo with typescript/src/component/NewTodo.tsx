import { useContext, useRef } from "react";
import TodoContext from "../store/TodoCtx";
import classes from "./NewTodo.module.css";

/***************************************************************
 * Here we are getting the function from the props
 * For that we need to define the type here
 * Todo: Function type is this () => return type  ex-: () => void
 * `void` here is return type as I know I don't return anything from this function
 * we can return anything like array object //(value: string) => string[]
 ****************************************************************/

/** 
 * TODO: Additionally if we have lots of props we also create the type alias
  type TodoComp={
    onAddTodo:(value:string)=>void
  } 
**/
// const NewTodo: React.FC<{ onAddTodo: (value: string) => void }>
const NewTodo: React.FC = () => {
  /***************************************************************
   * So can't use the ref here just useRef() like [React+JS] instead we need to tell the
   * Typescript which element we refer here like HTMLInputElement | HTMLAnchorElement
   * Todo: We still got waring in ref because we need to set the initial value to the ref
   ****************************************************************/
  const inputRef = useRef<HTMLInputElement>(null);
  const { addTodoItem } = useContext(TodoContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    /***************************************************************
     * Typescript automatically add the ?. optional chain here because
     * Typescript refer to the inputRef initial value that is null
     * Todo: So if we know (inputRef.current) this can't be null then
     *  we can ! use this mark there instead of ? mark
     ****************************************************************/
    const value = inputRef.current!.value;

    if (value.length === 0) return;
    addTodoItem(value);
  };

  const handleInputChange = (event: React.ChangeEvent) => {};

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="todo">Add Todo</label>
      <input
        type="text"
        id="todo"
        ref={inputRef}
        onChange={handleInputChange}
      />
      <button>Submit</button>
    </form>
  );
};
export default NewTodo;

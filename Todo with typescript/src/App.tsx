import NewTodo from "./component/NewTodo";
import Todo from "./component/todo";
import TodoCtxProvider from "./store/TodoCtxProvider";

const App = () => {
  return (
    <TodoCtxProvider>
      <NewTodo />
      <Todo />
    </TodoCtxProvider>
  );
};

export default App;

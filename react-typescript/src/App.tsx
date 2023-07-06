import Todo from "./component/todo";
import TodoClass from "./models/todos";
function App() {
  const Todos = [
    new TodoClass("Learning Typescript is great"),
    new TodoClass("Learning Typescript with React is great"),
  ];
  
  return (
    <div className="App">
      <Todo items={Todos} />
    </div>
  );
}

export default App;

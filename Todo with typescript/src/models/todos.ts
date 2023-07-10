class TodoClass {
  id: string;
  text: string;
  constructor(todoName: string) {
    this.id = Math.floor(Math.random() * 99999 + 1).toString(36);
    this.text = todoName;
  }
}

export default TodoClass;

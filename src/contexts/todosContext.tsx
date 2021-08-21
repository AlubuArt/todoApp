import React, { useState } from "react";

interface TodoContextInterface {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo, index: number) => void;
}


export const TodoContext = React.createContext<TodoContextInterface>({
  todos: [{ title: "todo1" }, { title: "todo2" }],
  addTodo: () => {}, 
  removeTodo: () => {}
});

const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      title: "todo3",
    },
    {
      title: "todo4",
    },
  ]);

  const addTodo = (todo: Todo) => {
      const newTodo: Todo = {
          title: todo.title
      }
      setTodos([...todos, newTodo])
  };

  const removeTodo = (todo: Todo, removeIndex: number) => {
        setTodos(todos.filter((_, index) => index !== removeIndex))
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      <>{children}</>
    </TodoContext.Provider>
  );
};
export default TodoProvider;

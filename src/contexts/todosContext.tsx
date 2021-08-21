import React, { useState } from "react";

interface TodoContextInterface {
  todos: Todo[];
  addTodo: (todo: Todo) => void
}

//const initialValue = [{'todo1'}, {'todo2'}]

export const TodoContext = React.createContext<TodoContextInterface>({
  todos: [{ title: "todo1" }, { title: "todo2" }],
  addTodo: () => {}
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

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      <>{children}</>
    </TodoContext.Provider>
  );
};
export default TodoProvider;

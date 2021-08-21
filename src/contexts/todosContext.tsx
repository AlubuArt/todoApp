import React, { useState } from "react";

export interface TodoContextInterface {
  todos: Todo[];
  addTodo: (title: string ) => void;
  removeTodo: (todo: Todo, index: number) => void;
  toggleStatus: (todo: Todo, index: number, status: string) => void
}

export const TodoContext = React.createContext<TodoContextInterface>({
  todos: [{ title: "todo1", status:'' }],
  addTodo: () => {}, 
  removeTodo: () => {},
  toggleStatus: () => {}
});

const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([
    ]);

  const addTodo = (title: string) => {
    console.log(title)
      const newTodo: Todo = {
          title: title,
          status: "Todo"
      }
      setTodos([...todos, newTodo])
  };

  const removeTodo = (todo: Todo, removeIndex: number) => {
        setTodos(todos.filter((_, index) => index !== removeIndex))
  }

  const toggleStatus = (todo: Todo, toggleIndex: number, status: string) => {
      
    todos.filter((_, index) => {
      if(index === toggleIndex) {
        todo.status = status;
        setTodos([...todos])
      }
    })
    
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggleStatus }}>
      <>{children}</>
    </TodoContext.Provider>
  );
};
export default TodoProvider;

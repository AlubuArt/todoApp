import React, { useState } from "react";

export interface TodoContextInterface {
  todos: Todo[];
  addTodo: (title: string ) => void;
  removeTodo: (todo: Todo, index: number) => void;
  toggleStatus: (todo: Todo, index: number, status: string) => void
  toggleDeadline: (todo: Todo, index: number, deadline: string) => void
}

export const TodoContext = React.createContext<TodoContextInterface>({
  todos: [{ title: "todo1", status:'', deadline: new Date(), isDeadline: false }],
  addTodo: () => {}, 
  removeTodo: () => {},
  toggleStatus: () => {},
  toggleDeadline: () => {}
});

const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([
    ]);

  const addTodo = (title: string) => {
    console.log(title)
      const newTodo: Todo = {
          title: title,
          status: "Todo",
          deadline: false,
          isDeadline: false
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

  const toggleDeadline = (todo: Todo, toggleIndex: number, deadline: string) => {
      console.log(todo, toggleIndex, deadline)
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggleStatus, toggleDeadline }}>
      <>{children}</>
    </TodoContext.Provider>
  );
};
export default TodoProvider;

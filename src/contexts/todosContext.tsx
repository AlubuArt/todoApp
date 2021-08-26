import React, { useState } from "react";
import { Moment } from "moment";
import Todo from "../components/Todo";

export interface TodoContextInterface {
  todos: Todo[];
  todo: Todo ;
  id: number;
  addTodo: (title: string) => void;
  removeTodo: (todo: Todo, index: number) => void;
  toggleStatus: (todo: Todo, index: number, status: string) => void;
  toggleDeadline: (todo: Todo, index: number, deadline: Moment) => void;
}



export const TodoContext = React.createContext<TodoContextInterface>({
  todos: [
    {
      title: "todo1",
      status: "",
      deadline: new Date(),
      id: 1,
    },
  ],
  
  addTodo: () => {},
  removeTodo: () => {},
  toggleStatus: () => {},
  toggleDeadline: () => {},
  todo: {
    title: "todo1",
    status: "",
    deadline: new Date(),
    id: 1,
  },
  id: 1,
});

const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo] = useState<Todo>({title: 'string',
    status: 'string',
    deadline: true,
    id: 2})
  const id = 2

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      title: title,
      status: "Todo",
      deadline: false,
      id: 1,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todo: Todo, removeIndex: number) => {
    setTodos(todos.filter((_, index) => index !== removeIndex));
  };

  const toggleStatus = (todo: Todo, toggleIndex: number, status: string) => {
    todos.filter((_, index) => {
      if (index === toggleIndex) {
        todo.status = status;
        setTodos([...todos]);
      }
    });
  };

  const toggleDeadline = (
    todo: Todo,
    toggleIndex: number,
    deadline: Moment
  ) => {
    todos.filter((_, index) => {
      if (index === toggleIndex) {
        todo.deadline = deadline.format("MMMM Do YYYY, h:mm:ss a");
        setTodos([...todos]);
      }
    });
  };

  
  return (
    <TodoContext.Provider
      value={{ todos, addTodo, removeTodo, toggleStatus, toggleDeadline, todo, id}}
    >
      <>{children}</>
    </TodoContext.Provider>
  );
};
export default TodoProvider;

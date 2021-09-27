import React, { useState } from "react";
import { Moment } from "moment";

interface TodoContextInterface {
  todos: Todo[];
  todo: Todo;
  addTodo: (title: string, todoID: string) => void;
  removeTodo: (id: string) => void;
  toggleStatus: (todoID: string, status: string) => void;
  toggleDeadline: (todoID: string, deadline: string | Moment) => void;
}

export const TodoContext = React.createContext<TodoContextInterface>({
  todos: [],
  todo: {
    title: "",
    status: "",
    deadline: "",
    id: "",
  },
  addTodo: () => {},
  removeTodo: () => {},
  toggleStatus: () => {},
  toggleDeadline: () => {},
});

const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo] = useState<Todo>({
    title: "",
    status: "",
    deadline: "",
    id: "",
  });

  const addTodo = (title: string, todoID: string) => {
    const newTodo: Todo = {
      title: title,
      status: "Todo",
      deadline: "Set deadline?",
      id: todoID,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleStatus = (todoID: string, status: string) => {
    todos.forEach((todo) => {
      if (todo.id === todoID) {
        todo.status = status;
      }
    });
   setTodos([...todos]);
  };

  const toggleDeadline = (todoID: string, deadline: string | Moment) => {
    todos.forEach((todo) => {
      if (todo.id === todoID) {
        todo.deadline = deadline.toString();
      }
    });
    setTodos([...todos]);
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, removeTodo, toggleStatus, toggleDeadline, todo }}
    >
      <>{children}</>
    </TodoContext.Provider>
  );
};
export default TodoProvider;

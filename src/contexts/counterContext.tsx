import React, { createContext, useState } from "react";
//TODO: refactor count

export interface TodoCounterInterface {
  todoCount: Todo[];
  doingCount: Todo[];
  doneCount: Todo[];
  handleCount: (todos: Todo[]) => void;
}

export const TodoCounterContext = createContext<TodoCounterInterface>({
  todoCount: [],
  doingCount: [],
  doneCount: [],
  handleCount: () => {},
});

const TodoCounterProvider: React.FC = ({ children }) => {
  const [todoCount, setTodoCount] = useState<Todo[]>([]);
  const [doingCount, setDoingCount] = useState<Todo[]>([]);
  const [doneCount, setDoneCount] = useState<Todo[]>([]);

  const handleCount = (todos: Todo[]) => {


    setTodoCount(todos.filter((todo) => todo.status === "Todo"));
    setDoingCount(todos.filter((todo) => todo.status === "Doing"));
    setDoneCount(todos.filter((todo) => todo.status === "Done"));
  };


  return (
    <TodoCounterContext.Provider
      value={{ todoCount, doingCount, doneCount, handleCount }}
    >
      {children}
    </TodoCounterContext.Provider>
  );
};

export default TodoCounterProvider;

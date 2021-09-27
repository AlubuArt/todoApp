import React, { useContext, useState, useEffect } from "react";
import Todo from "../components/Todo";
import { NavigationContext } from "../contexts/navigationContext";
import { TodoContext } from "../contexts/todosContext";
import styles from "./Todos.module.css";

const Todos: React.FC = () => {
  const { todos } = useContext(TodoContext);
  const { view } = useContext(NavigationContext);
  const [selectedTodos, setSelectedTodos] = useState<Todo[]>([]);

  const Heading = () => (
    <div className={styles.todosHeading}>
      <h2 style={{ textAlign: "center" }}>{view}</h2>
    </div>
  );

  const IfNoTodo = () => (
    <div style={{ textAlign: "center" }}>Add some todos</div>
  );

  useEffect(() => {
    const selected = todos.filter((todo) => todo.status === view);
    setSelectedTodos(selected);
  }, [todos, view]);

  return (
    <div className={styles.todosContainer}>
      <Heading />
      {selectedTodos.length === 0 && <IfNoTodo />}
      {selectedTodos.map((todo, i) => (
        <Todo todo={todo} key={i} />
      ))}
    </div>
  );
};

export default Todos;

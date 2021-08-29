import React, { useContext, useState, useEffect } from "react";
import Todo from "../components/Todo";
import { NavigationContext } from "../contexts/navigationContext";
import { TodoContext } from "../contexts/todosContext";
import { TodoCounterContext } from "../contexts/counterContext";
import styles from "./Todos.module.css";

const Todos: React.FC = () => {
  const { todos } = useContext(TodoContext);
  const { view } = useContext(NavigationContext);
  const [selectedTodos, setSelectedTodos] = useState<Todo[]>([]);
  const { handleCount } = useContext(TodoCounterContext);

  const Heading = () => {
    return (
      <div className={styles.todosHeading}>
        <h2 style={{ textAlign: "center" }}>{view}</h2>
      </div>
    );
  };
  const IfNoTodo = () => {
    return <div style={{ textAlign: "center" }}>Add some todos</div>;
  };

  useEffect(() => {
    const selected = todos.filter((todo) => todo.status === view);
    setSelectedTodos(selected);
  }, [todos, view]);

  useEffect(() => {
    handleCount(todos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  return (
    <div className={styles.todosContainer}>
      <Heading />
      <div>
        {selectedTodos.length === 0 && <IfNoTodo />}

        {selectedTodos.map((todo, i) => (
          <Todo todo={todo} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Todos;

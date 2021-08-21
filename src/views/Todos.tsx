import React, { useState, useContext } from "react";
import AddTodoComponent from "../components/AddTodoComponent";
import Todo from "../components/Todo";
import { TodoContext } from "../contexts/todosContext";
import styles from "./Todos.module.css";

export const Heading = () => {
  return <h2 style={{ textAlign: "center" }}>Todo</h2>;
};
export const IfNoTodo = () => {
  return <div style={{ textAlign: "center" }}>Add some todos</div>;
};

const Todos: React.FC = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className={styles.todosContainer}>
      <Heading />
      <AddTodoComponent />
      <div>
        {todos.length === 0 && <IfNoTodo />}
        {todos.map((todo, i) => (
          <Todo todo={todo} key={i} id={i} />
        ))}
      </div>
    </div>
  );
};

export default Todos;

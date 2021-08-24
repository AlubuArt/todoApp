import React, { useContext, useState, useEffect } from "react";
import Todo from "../components/Todo";
import { NavigationContext } from "../contexts/navigationContext";
import { TodoContext } from "../contexts/todosContext";
import styles from "./Todos.module.css";




const Todos: React.FC<Todos> = () => {
  const { todos } = useContext(TodoContext);
  const [heading, setHeading] = useState<string>('Todo');
  const {view} = useContext(NavigationContext);
  const [selectedTodos, setSelectedTodos] = useState<Todo[]>([])
  


  const Heading = () => {
    return <h2 style={{ textAlign: "center" }}>{heading}</h2>;
  };
  const IfNoTodo = () => {
    return <div style={{ textAlign: "center" }}>Add some todos</div>;
  };

  useEffect(() => {
    const selected = todos.filter(todo => todo.status === view)
    setSelectedTodos(selected);
    return () => {
      
    }
  }, [todos, view])

  return (
    <div className={styles.todosContainer}>
      <Heading />
      
      <div>
        {selectedTodos.length === 0 && <IfNoTodo />}
        
        {selectedTodos.map((todo, i) => (
          
          <Todo todo={todo} key={i} id={i} deadline={todo.deadline} />
        ))}
      </div>
    </div>
  );
};

export default Todos;

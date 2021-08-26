import React, { useContext, useState, useEffect } from "react";
import Todo from "../components/Todo";
import { NavigationContext } from "../contexts/navigationContext";
import { TodoContext } from "../contexts/todosContext";
import { TodoCounterContext } from "../contexts/todosCounter";
import styles from "./Todos.module.css";




const Todos: React.FC = () => {
  const { todos } = useContext(TodoContext);
  const {view} = useContext(NavigationContext);
  const [selectedTodos, setSelectedTodos] = useState<Todo[]>([])
  const {handleCount} = useContext(TodoCounterContext)
    
  


  const Heading = () => {      
    return <h2 style={{ textAlign: "center" }}>{view}</h2>;
  };
  const IfNoTodo = () => {
    return <div style={{ textAlign: "center" }}>Add some todos</div>;
  };

  
  useEffect(() => {
    const selected = todos.filter(todo => todo.status === view)
    setSelectedTodos(selected);
    handleCount(todos);
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

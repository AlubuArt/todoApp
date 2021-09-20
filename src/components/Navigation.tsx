import React, { useContext, useState, useEffect} from "react";
import { NavigationContext } from "../contexts/navigationContext";
import styles from "./Navigation.module.css";
import NavigationButton  from './NavigationButton';
import { TodoContext } from "../contexts/todosContext";


const Navigation: React.FC = () => {
  const { toggleNavigation } = useContext(NavigationContext);
  const [todoCount, setTodoCount] = useState<Todo[]>([])
  const [doingCount, setDoingCount] = useState<Todo[]>([])
  const [doneCount, setDoneCount] = useState<Todo[]>([]);
  const { todos } = useContext(TodoContext);

  useEffect(() => {
    
    const todosCount = (todos: Todo[]) => {
      setTodoCount(todos.filter(todos => todos.status === "Todo"))
      setDoingCount(todos.filter(todos => todos.status === "Doing"))
      setDoneCount(todos.filter(todos => todos.status === "Done"))
  }
    todosCount(todos)
  }, [todos])
  
  return (
    <div className={styles.navigationContainer}>
      <NavigationButton name={"Todo"} toggleNavigation={toggleNavigation} count={todoCount.length}/>
      <NavigationButton name={"Doing"} toggleNavigation={toggleNavigation} count={doingCount.length}/>
      <NavigationButton name={"Done"} toggleNavigation={toggleNavigation} count={doneCount.length}/>
    </div>
  );
};

export default Navigation;

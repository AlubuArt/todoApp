import React, { useContext } from "react";
import { NavigationContext } from "../contexts/navigationContext";
import { TodoCounterContext } from "../contexts/counterContext";
import styles from "./Navigation.module.css";
import NavigationButton  from './NavigationButton';

//TODO: refactor (make button into component)

const Navigation: React.FC = () => {
  const { todoCount, doingCount, doneCount } = useContext(TodoCounterContext);
  const { toggleNavigation } = useContext(NavigationContext);

  return (
    <div className={styles.navigationContainer}>
      <NavigationButton name={"Todo"} toggleNavigation={toggleNavigation} count={todoCount.length}/>
      <NavigationButton name={"Doing"} toggleNavigation={toggleNavigation} count={doingCount.length}/>
      <NavigationButton name={"Done"} toggleNavigation={toggleNavigation} count={doneCount.length}/>
    </div>
  );
};

export default Navigation;

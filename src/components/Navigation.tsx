import React, { useContext } from "react";
import { NavigationContext } from "../contexts/navigationContext";
import { TodoCounterContext } from "../contexts/counterContext";
import styles from "./Navigation.module.css";

const Navigation: React.FC = () => {
  const { todoCount, doingCount, doneCount } = useContext(TodoCounterContext);
  const { toggleNavigation } = useContext(NavigationContext);

  return (
    <div className={styles.navigationContainer}>
      <div className={styles.navigationTab}>
        <button onClick={() => toggleNavigation("Todo")}>
          Todo {todoCount.length}
        </button>
      </div>
      <div className={styles.navigationTab}>
        <button onClick={() => toggleNavigation("Doing")}>
          Doing {doingCount.length}
        </button>
      </div>
      <div className={styles.navigationTab}>
        <button onClick={() => toggleNavigation("Done")}>
          Done {doneCount.length}
        </button>
      </div>
    </div>
  );
};

export default Navigation;

import React, {useContext} from "react";
import { NavigationContext } from "../contexts/navigationContext";
import { TodoCounterContext } from "../contexts/todosCounter";
import styles from './Navigation.module.css';


const Navigation: React.FC = () => {

    const {todoCount, doingCount, doneCount} = useContext(TodoCounterContext);
     const {toggleNavigation} = useContext(NavigationContext);

    return (

        <div className={styles.navigationContainer}>
            <div className={styles.navigationTab}>
                <button onClick={() => toggleNavigation("Todo")}>Todo</button>
                <p>{todoCount.length}</p>
            </div>
            <div className={styles.navigationTab}>
                <button onClick={() => toggleNavigation("Doing")}>Doing</button>
                <p>{doingCount.length}</p>
            </div>
            <div className={styles.navigationTab}>
                <button onClick={() => toggleNavigation("Done")}>Done</button>
                <p>{doneCount.length}</p>
            </div>
        </div>
    )
}


export default Navigation;


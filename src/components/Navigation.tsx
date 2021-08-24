import React, {useContext} from "react";
import { NavigationContext } from "../contexts/navigationContext";
import styles from './Navigation.module.css';



const Navigation = () => {

    const {toggleNavigation} = useContext(NavigationContext);


    return (

        <div className={styles.navigationContainer}>
            <div className={styles.navigationTab}>
                <button onClick={() => toggleNavigation("Todo")}>Todo</button>
            </div>
            <div className={styles.navigationTab}>
                <button onClick={() => toggleNavigation("Doing")}>Doing</button>
            </div>
            <div className={styles.navigationTab}>
                <button onClick={() => toggleNavigation("Done")}>Done</button>
            </div>
        </div>
    )
}


export default Navigation;


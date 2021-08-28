import React  from 'react';
import styles from "./Navigation.module.css";

interface ButtonProps {
    toggleNavigation: (view: string) => void;
    count: number;
    name: string
}

const NavigationButton: React.FC<ButtonProps> = ({name, count, toggleNavigation}) => {

    return (
        <div  tabIndex={1} className={styles.navigationTab} onClick={() => toggleNavigation(name)}>
          <h2>
            {name} {count}
          </h2>
       
      </div>
    )

}

export default NavigationButton;
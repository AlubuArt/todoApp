import React  from 'react';
import styles from "./Navigation.module.css";

interface ButtonProps {
    toggleNavigation: (view: string) => void;
    count: number;
    name: string
}

const NavigationButton: React.FC<ButtonProps> = ({name, count, toggleNavigation}) => {

    return (
        <div className={styles.navigationTab}>
        <button onClick={() => toggleNavigation(name)}>
          {name} {count}
        </button>
      </div>
    )

}

export default NavigationButton;
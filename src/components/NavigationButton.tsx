import React, {useState}  from 'react';
import styles from "./Navigation.module.css";

interface ButtonProps {
    toggleNavigation: (view: string) => void;
    count: number;
    name: string
}

const NavigationButton: React.FC<ButtonProps> = ({name, count, toggleNavigation}) => {

  const [boxColor, setBoxColor] = useState("white")

    const handleClick = () => {
      toggleNavigation(name);
      toggleBoxColor()
    }

    const toggleBoxColor = () => {
        setBoxColor("orange")
    }

    return (
        <div  style={{backgroundColor: boxColor}} className={styles.navigationTab} onClick={handleClick}>
          <div>
           <h3>
             {name}
          </h3>
          </div>
          <div>
            <h4> {count}</h4>
          </div>
          
       
      </div>
    )

}

export default NavigationButton;
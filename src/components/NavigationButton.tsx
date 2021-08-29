import React, { useContext, useEffect, useState } from 'react';
import { NavigationContext } from '../contexts/navigationContext';
import styles from "./Navigation.module.css";
import classNames from 'classnames/bind';

interface ButtonProps {
    toggleNavigation: (view: string) => void;
    count: number;
    name: string;
}

//make dynamic className
let cx = classNames.bind(styles);

const NavigationButton: React.FC<ButtonProps> = ({name, count, toggleNavigation}) => {

    const {view} = useContext(NavigationContext);
    const [classN, setClassN] = useState('inActive');
    let className = cx(classN)

    const handleClick = () => {
    toggleNavigation(name);
    }

    useEffect(() => {
      if(view === name) {
        setClassN("active")
      } else (
        setClassN("inActive")
      )
    }, [view, name])

  
    return (
        <div className={className} onClick={handleClick}>
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
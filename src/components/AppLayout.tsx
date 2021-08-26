import React, {useContext, useState} from 'react';
import AddTodoComponent from './AddTodoComponent';
import Header  from './Header';
import Navigation from './Navigation'
import Todos from '../views/Todos';
import NavigationProvider from '../contexts/navigationContext';
import styles from './AppLayout.module.css';
import TodoCounterProvider from '../contexts/counterContext';


const AppLayout = () => {


    
    

    return (
        <NavigationProvider >
            <TodoCounterProvider>
                <div className={styles.appLayoutContainer} >
                    <Header />
                    <Navigation />
                    <AddTodoComponent/>
                    <Todos />
                </div> 
            </TodoCounterProvider>
           
        </NavigationProvider>
    )
}

export default AppLayout;
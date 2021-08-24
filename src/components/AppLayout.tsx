import React, { Fragment, useContext } from 'react';
import AddTodoComponent from './AddTodoComponent';
import Header  from './Header';
import Navigation from './Navigation'
import Todos from '../views/Todos';
import { TodoContext } from '../contexts/todosContext';
import NavigationProvider from '../contexts/navigationContext';
import { NavigationContext } from '../contexts/navigationContext';


const AppLayout = () => {

    const {view, toggleNavigation} = useContext(NavigationContext);

    console.log('view' + view)


    return (
        <NavigationProvider>
            <div>
                <Header />
                <Navigation />
                <AddTodoComponent/>
                <Todos />
            </div>
        </NavigationProvider>
    )
}

export default AppLayout;
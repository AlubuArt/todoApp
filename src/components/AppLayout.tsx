import React, { Fragment } from 'react';
import AddTodoComponent from './AddTodoComponent';
import Header  from './Header';
import Navigation from './Navigation'
import Todos from '../views/Todos';





const AppLayout = () => {



    return (
        <Fragment>
            <div>
                <Header />
                <Navigation />
                <AddTodoComponent />
                <Todos />
            </div>
        </Fragment>
    )
}

export default AppLayout;
import AddTodoComponent from './AddTodoComponent';
import Header  from './Header';
import Navigation from './Navigation'
import Todos from '../views/Todos';
import NavigationProvider from '../contexts/navigationContext';


const AppLayout = () => {

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
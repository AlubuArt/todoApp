import AddTodoComponent from './AddTodoComponent';
import Header  from './Header';
import Navigation from './Navigation'
import Todos from '../views/Todos';
import NavigationProvider from '../contexts/navigationContext';
import styles from './AppLayout.module.css';


const AppLayout = () => {

    return (
        <NavigationProvider >
                <div className={styles.appLayoutContainer} >
                    <Header />
                    <Navigation />
                    <AddTodoComponent/>
                    <Todos />
                </div>            
        </NavigationProvider>
    )
}

export default AppLayout;
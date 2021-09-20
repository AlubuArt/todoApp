import NavigationProvider from "./contexts/navigationContext";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import AddTodoComponent from "./components/AddTodoComponent";
import Todos from "./views/Todos";
import styles from "./components/AppLayout.module.css";
import TodoProvider from "./contexts/todosContext";

function App() {
  return (
    <NavigationProvider>
      <TodoProvider>
        <div className={styles.appLayoutContainer}>
          <Header />
          <Navigation />
          <AddTodoComponent />
          <Todos />
        </div>
      </TodoProvider >
    </NavigationProvider>
  );
}

export default App;

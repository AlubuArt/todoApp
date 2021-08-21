
import TodoProvider from './contexts/todosContext';
import Todos from './views/Todos';


function App() {
  return (

    <TodoProvider>
      <Todos />
    </TodoProvider>
  )
  
}

export default App;

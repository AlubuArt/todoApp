import React, {useState, useContext} from "react";
import { TodoContext } from "../contexts/todosContext";
import styles from './Todos.module.css';

const Todos: React.FC = () => {

    const {todos, addTodo, removeTodo } = useContext(TodoContext)
    const [inputData, setInputData] = useState<Todo| {} >('')
    
       

    const handleAddTodo = (e: React.FormEvent, inputData: Todo | any) => {
        e.preventDefault()
        addTodo(inputData)
        setInputData('')
        
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setInputData({
                ...inputData,
                [e.currentTarget.id]:e.currentTarget.value})  
    }
  
    return (
      <div className={styles.todosContainer}>
        <h2 style={{ textAlign: "center" }}>Todo</h2>
        <form
          onSubmit={(e) => handleAddTodo(e, inputData)}
          style={{ display: "flex", marginBottom: 8 }}
        >
          <input
            value={inputData}
            type="text"
            id="title"
            onChange={handleChange}
            placeholder="Fix the thing.."
            className={styles.input}
          />
          <button
            type="submit"
            className={styles.button}
          >
            Add
          </button>
        </form>
        <div>
          {todos.length === 0 && (
            <div style={{ textAlign: "center" }}>Add some todos</div>
          )}
          {todos.map((todo, i) => (
            <div
              key={`${todo}-${i}`}
              className={styles.todo}
            >
              <span style={{ flex: 1 }}>{todo.title}</span>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => removeTodo(todo, i )}
              >
                &times;
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }


export default Todos;

  


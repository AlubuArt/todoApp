import React, {useState} from "react";
import styles from './Todos.module.css';

const Todos = () => {

    const [todos, setTodos] = useState(["hello there", "general kenobi"])
    const [newTodo, setNewTodo] = useState('')
       

    const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setTodos([...todos, newTodo])
        setNewTodo('')
    
    };

    const removeTodo = (removeIndex: number) => {
        setTodos(todos.filter((_, index) => index !== removeIndex))
    };
  
    return (
      <div className={styles.todosContainer}>
        <h2 style={{ textAlign: "center" }}>Todo</h2>
        <form
          onSubmit={addTodo}
          style={{ display: "flex", marginBottom: 8 }}
        >
          <input
            type="text"
            name="newTodo"
            id="newTodo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
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
              <span style={{ flex: 1 }}>{todo}</span>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => removeTodo(i)}
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

  


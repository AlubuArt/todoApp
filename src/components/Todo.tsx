import React, { useContext } from 'react';
import styles from '../views/Todos.module.css';
import { TodoContext } from "../contexts/todosContext";

interface TodoProps {
    
    todo: Todo;
    key: number;
    id: number;
}


const Todo: React.FC<TodoProps> = ({todo, id}, key) => {

    const {removeTodo} = useContext(TodoContext);


    return (
        <div
              key={key}
              className={styles.todo}
            >
              <span style={{ flex: 1 }}>{todo.title}</span>
              <span style={{ flex: 1 }}>{todo.status}</span>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => removeTodo(todo, id )}
              >
                &times;
              </span>
            </div>
    )
}

export default Todo;


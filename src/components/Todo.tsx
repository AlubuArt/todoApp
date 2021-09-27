import React, { useContext } from "react";
import styles from "./Todo.module.css";
import buttonStyles from './Buttons.module.css';
import { TodoContext } from "../contexts/todosContext";
import DateAndTimePicker from "./DateAndTimePicker";

interface TodoProps {
  todo: Todo;
}

const Todo: React.FC<TodoProps> = ({ todo }, key) => {
  const { removeTodo, toggleStatus } = useContext(TodoContext);
   

  const handleToggle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let newStatus = e.target.value;
    toggleStatus(todo.id, newStatus);
  };

  return (
    <div key={key} className={styles.todoContainer}>
      <div className={styles.todoTitle}>
        <h4>{todo.title}</h4>
      </div>
      <div className={styles.statusSelectorContainer} >
        <select className={styles.statusSelector} value={todo.status} name="status" onChange={handleToggle}>
            <option value={"Todo"}>Todo</option>
            <option value={"Doing"}>Doing</option>
            <option value={"Done"}>Done</option>
        </select>
      </div>
      <div className={styles.dateAndTimePicker}>
        <DateAndTimePicker todo={todo} />
      </div>
      <div className={styles.deleteTodoButtonContainer}>
        <button className={buttonStyles.buttonSecondary} onClick={() => removeTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;

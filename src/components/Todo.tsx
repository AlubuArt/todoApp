import React, { useContext } from "react";
import styles from "./Todo.module.css";
import buttonStyles from './Buttons.module.css';
import { TodoContext } from "../contexts/todosContext";
import { Moment } from "moment";
import DateAndTimePicker from "./DateAndTimePicker";

interface TodoProps {
  todo: Todo;
  key: number;
  id: number;
  deadline: Date | Moment | boolean;
}

const Todo: React.FC<TodoProps> = ({ todo, id }, key) => {
  const { removeTodo, toggleStatus } = useContext(TodoContext);
   

  const handleToggle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    toggleStatus(todo, id, newStatus);
  };

  return (
    <div key={key} className={styles.todoContainer}>
      <div className={styles.todoTitle}>
        <h4>{todo.title}</h4>
      </div>
      <div >
        <select className={styles.statusSelector} defaultValue={todo.status} name="status" onChange={handleToggle}>
            <option value={"Todo"}>Todo</option>
            <option value={"Doing"}>Doing</option>
            <option value={"Done"}>Done</option>
        </select>
      </div>
      <div className={styles.dateAndTimePicker}>
        <DateAndTimePicker todo={todo} id={id} />
      </div>
      <div className={styles.deleteTodoButtonContainer}>
        <button className={buttonStyles.buttonSecondary} onClick={() => removeTodo(todo, id)}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;

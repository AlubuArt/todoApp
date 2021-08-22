import React, { useContext } from "react";
import styles from "../views/Todos.module.css";
import { TodoContext } from "../contexts/todosContext";
import {Moment} from 'moment'
import DateAndTimePicker from './DateAndTimePicker'

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
    <div key={key} className={styles.todo}>
      <span style={{ flex: 1 }}>{todo.title}</span>
      <span style={{ flex: 1 }}>{todo.status}</span>
      <select name="status" onChange={handleToggle}>
        <option value={"Todo"}>Todo</option>
        <option value={"Doing"}>Doing</option>
        <option value={"Done"}>Done</option>
      </select>
      <div>

      <DateAndTimePicker todo={todo} id={id}/>
      </div>
      <span style={{ cursor: "pointer" }} onClick={() => removeTodo(todo, id)}>
        &times;
      </span>
    </div>
  );
};

export default Todo;

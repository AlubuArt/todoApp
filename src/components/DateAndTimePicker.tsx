import React, { useContext} from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { TodoContext } from "../contexts/todosContext";
import { Moment } from "moment";
import styles from "./DateAndTimePicker.module.css"

interface PickerProps {
  todo: Todo;
}

const DateAndTimePicker: React.FC<PickerProps> = ({todo}) => {
  const { toggleDeadline } = useContext(TodoContext);

  const handleChange = (value: string | Moment) => {
    toggleDeadline(todo.id, value);
    
  };
 //Fixed the date bug ( what a hassle this was, please see SO answer: https://stackoverflow.com/questions/46053202/how-to-clear-the-value-entered-in-react-datetime)
  return (
    <Datetime  onChange={handleChange} renderInput={(props) => { return <input {...props} value={(todo.deadline)} />}}/>
  );
};

export default DateAndTimePicker;

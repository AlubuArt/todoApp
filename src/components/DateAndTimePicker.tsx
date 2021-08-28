import React, { useContext } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { TodoContext } from "../contexts/todosContext";
import { Moment } from "moment";

interface PickerProps {
  id: number;
  todo: Todo;
}

const DateAndTimePicker: React.FC<PickerProps> = ({ todo, id }) => {
  const { toggleDeadline } = useContext(TodoContext);

  const handleChange = (value: Moment) => {
    toggleDeadline(todo, id, value);
  };
 //TODO: fix date bug
  return <Datetime onChange={handleChange} initialValue={todo.deadline}/>;
};

export default DateAndTimePicker;

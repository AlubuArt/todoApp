import React, { useContext } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { TodoContext } from "../contexts/todosContext";
import { Moment } from "moment";

interface Picker {
  id: number;
  todo: Todo;
}

const DateAndTimePicker: React.FC<Picker> = ({ todo, id }) => {
  const { toggleDeadline } = useContext(TodoContext);

  const handleChange = (value: Moment) => {
    toggleDeadline(todo, id, value);
  };

  return <Datetime onChange={handleChange} value={todo.deadline}/>;
};

export default DateAndTimePicker;

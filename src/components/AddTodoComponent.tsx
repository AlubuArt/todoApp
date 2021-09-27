import React, { useContext, useState } from "react";
import styles from "../components/AddTodoComponent.module.css";
import buttonStyles from "../components/Buttons.module.css";
import { TodoContext } from "../contexts/todosContext";
import { v4 as uuidv4 } from "uuid";

const AddTodoComponent: React.FC = () => {
  const { addTodo } = useContext(TodoContext);
  const [inputData, setInputData] = useState<string>("");

  const handleAddTodo = (e: React.FormEvent, inputData: string) => {
    e.preventDefault();
    if (inputData === "") {
      alert("Please input a todo.");
    } else {
      addTodo(inputData, uuidv4());
      setInputData("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.currentTarget.value);
  };

  return (
    <div className={styles.addTodoContainer}>
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
          maxLength={25}
        />

        <button type="submit" className={buttonStyles.buttonPrimary}>
          Add todo
        </button>
      </form>
    </div>
  );
};

export default AddTodoComponent;

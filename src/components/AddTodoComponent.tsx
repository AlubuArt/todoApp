import React, {useContext, useState} from 'react';
import styles from '../views/Todos.module.css';
import { TodoContext } from "../contexts/todosContext";



const AddTodoComponent: React.FC = () => {

    const {addTodo} = useContext(TodoContext)
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
    )

}

export default AddTodoComponent;
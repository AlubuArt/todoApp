import React, {useState} from 'react';
import { JsxFlags } from 'typescript';



export const TodoContext = React.createContext<ContextType | null>(null);

const TodoProvider: React.FC = ({ children}) => {

    const [newTodo, setNewTodo] = useState<Todo[]>();
    const [todos, setTodos] = useState<Todo[]>([
        {
            title: "todo1",
        },
        {
            title: "todo2"
        }
    ]);
    

    return (
        
        <>{children}</>
    )

}
export default TodoProvider;

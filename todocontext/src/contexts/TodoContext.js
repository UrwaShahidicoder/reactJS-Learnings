import { createContext, useContext} from "react";

// Todo context is created by createContext
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


// useTodo is a method
export const useTodo  = () => {
    return useContext(TodoContext)
}
 export const TodoProvider = TodoContext.Provider
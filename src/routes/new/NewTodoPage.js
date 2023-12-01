import React from "react";
import { TodoForm } from "../../UI/TodoForm/TodoForm";
import { useTodos } from "../UseTodos";

function NewTodoPage() {

    const { addTodo } = useTodos()

    return(
        <TodoForm 
            label="Escribe tu nuevo ToDo"
            submitText="Añadir"
            submitEvent= {(text) => addTodo(text)}
        />
        
    )
}

export { NewTodoPage }
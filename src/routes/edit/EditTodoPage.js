import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { TodoForm } from "../../UI/TodoForm/TodoForm";
import { useTodos } from "../UseTodos";

function EditTodoPage() {

    const location = useLocation()
    const params = useParams()
    const id = Number(params.id)
    const { editTodo, getTodo, loading } = useTodos()

    let todoText

    if (location.state?.todo) {
        todoText = location.state.todo.text
    } else if (loading) {
        return <p>Cargando...</p>
    } else {
        const todo = getTodo(id)
        todoText = todo.text
    }

    return(
        <TodoForm 
            label="Edita tu ToDo"
            defaultTodoText={todoText}
            submitText="Editar"
            submitEvent= {(newText) => editTodo(id, newText)}
        />
    )
}

export { EditTodoPage }
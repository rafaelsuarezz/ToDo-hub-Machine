import React from "react";
import { useLocalStorage } from "./useLocalStorage";




function useTodos() {

    const {
        item: todos,
        saveItem: saveTodos,
        sincronizeItem: sincronizeTodos,
        loading,
        error,
    } = useLocalStorage("TODOS_V1", [])
    
    const [searchValue, setSearchValue] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)
    
    const completedTodos = todos.filter( todo => todo.completed).length // se filtra por palabras con el .filter para ver si la tarea esta compreta en el "completed"
    const totalTodos = todos.length // se agregan los todos por su longitud
    
    

    const searchedTodos = todos.filter( 
    (todo) => { 
        const todoText = todo.text.toLowerCase()
        const searchText = searchValue.toLowerCase()

        return todoText.includes(searchText)
    } )

    const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
            text,
            completed: false,
        })
        saveTodos(newTodos)
    }
    
    const completeTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        )
        newTodos[todoIndex].completed = true 
        saveTodos(newTodos)
    }

    const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
        )
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }

    return {
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal,
        addTodo,
        sincronizeTodos,
    }
}

export { useTodos }
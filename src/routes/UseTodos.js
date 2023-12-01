import React from "react";
import { useLocalStorage } from "./useLocalStorage";




function useTodos() {

    const {
        item: todos,
        saveItem: saveTodos,
        sincronizeItem: sincronizeTodos,
        loading,
        error,
    } = useLocalStorage("TODOS_V2", [])
    
    const [searchValue, setSearchValue] = React.useState('')
    
    const completedTodos = todos.filter( todo => todo.completed).length // se filtra por palabras con el .filter para ver si la tarea esta compreta en el "completed"
    const totalTodos = todos.length // se agregan los todos por su longitud

    const searchedTodos = todos.filter( 
    (todo) => { 
        const todoText = todo.text.toLowerCase()
        const searchText = searchValue.toLowerCase()

        return todoText.includes(searchText)
    } )

    
    const addTodo = (text) => {
        const id = newTodoId(todos)
        const newTodos = [...todos]
        newTodos.push({
            completed: false,
            text,
            id,
        })
        saveTodos(newTodos)
    }

    const getTodo = (id) => {
        const todoIndex = todos.findIndex(
            (todo) => todo.id === id
        )
        return todos[todoIndex]
    }

    const completeTodo = (id) => {
        const todoIndex = todos.findIndex(
            (todo) => todo.id === id
        )
        const newTodos = [...todos]
        newTodos[todoIndex].completed = true 
        saveTodos(newTodos)
    }

    const editTodo = (id, newText) => {
        const todoIndex = todos.findIndex(
            (todo) => todo.id === id
        )
        const newTodos = [...todos]
        newTodos[todoIndex].text = newText
        saveTodos(newTodos)
    }

    const deleteTodo = (id) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
        (todo) => todo.id === id
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
        addTodo,
        completeTodo,
        editTodo,
        deleteTodo,
        getTodo,
        loading,
        error,
        sincronizeTodos,
    }
}

function newTodoId(todoList) {

    if(!todoList.length) {
        return 1
    }

    const idList = todoList.map(todo => todo.id)
    const idMax = Math.max(...idList);
    return idMax + 1 
}

export { useTodos }
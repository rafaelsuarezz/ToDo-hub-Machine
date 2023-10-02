import React from 'react';
import '../TodoSearch/TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue, loading }) {

    return (
        <input 
            placeholder="Busca tu tarea"
            value = {searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value)
            }}
            disabled={loading}
        />
    )
}

export { TodoSearch };
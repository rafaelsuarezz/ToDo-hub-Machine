import React from 'react';
import '../CreateTodoButton/CreateTodoButton.css'
import { HiOutlinePlus } from "react-icons/hi2";

function CreateTodoButton({ onClick }) {
    return (
      <button 
        className='CreateTodoButton'
        onClick={ onClick }
      > 
        < HiOutlinePlus /> 
      </button>
    )
}

export { CreateTodoButton }
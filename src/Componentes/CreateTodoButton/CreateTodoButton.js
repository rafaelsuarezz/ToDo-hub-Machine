import React from 'react';
import '../CreateTodoButton/CreateTodoButton.css'
import { HiOutlinePlus } from "react-icons/hi2";

function CreateTodoButton({ setOpenModal }) {
    return (
      <button 
        className='CreateTodoButton'
        onClick = {
          () => { setOpenModal (state => !state)}
        }
      > < HiOutlinePlus /> </button>
    )
}

export { CreateTodoButton }
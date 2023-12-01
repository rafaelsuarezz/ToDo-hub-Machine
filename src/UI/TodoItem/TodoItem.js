import React from 'react';
import '../TodoItem/TodoItem.css'
import { HiMiniCheckCircle } from "react-icons/hi2";
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin6Line } from 'react-icons/ri';

function TodoItem(props) {
    return (
        <li className="todoitem"> 

            <span 
                className = {
                    `icon-check ${props.completed && "icon-check--active"}`}
                onClick={props.onComplete}
            > 
                < HiMiniCheckCircle />
            </span>

            <p 
                className = {`todoitem-p ${props.completed && "todoitem-p--complete"}`}
            >
                {props.text}
            </p>

            <div className='todoitem-container--icon'>
                <span 
                    className = {`icon-edit`}
                    onClick={props.onEdit}
                >
                    < CiEdit />
                </span>

                <span 
                    className = {`icon-delete`}
                    onClick={props.onDelete}
                >
                    < RiDeleteBin6Line />
                </span>
            </div>

        </li>
    )
}

export { TodoItem };
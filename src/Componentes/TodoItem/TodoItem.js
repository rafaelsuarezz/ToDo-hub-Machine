import React from 'react';
import '../TodoItem/TodoItem.css'
import { HiMiniCheckCircle, HiMiniXCircle } from "react-icons/hi2";

function TodoItem(props) {
    return (
        <li className="todoitem"> 

            <span 
                className = {
                    `icon icon-check ${props.completed && "icon-check--active"}`}
                onClick={props.onComplete}
            > 
            < HiMiniCheckCircle />
            </span>

            <p 
                className = {`todoitem-p ${props.completed && "todoitem-p--complete"}`}
            >{props.text}
            </p>

            <span 
                className = {`icon icon-delete`}
                onClick={props.onDelete}
            >
                < HiMiniXCircle />
            </span>

        </li>
    )
}

export { TodoItem };
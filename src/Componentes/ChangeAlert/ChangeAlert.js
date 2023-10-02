import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./Style.css"

function ChangeAlert({ show, toggleShow }) {
    if(show){
        return (
            <div className="changeAlert-container">
                <p>Hubo cambios en la lista de tareas</p>
                <button className="reloading"
                    onClick={() => toggleShow(false)}
                >
                    Recargar
                </button>
            </div>
        )
    } else {
        return null
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)


export { ChangeAlertWithStorageListener }
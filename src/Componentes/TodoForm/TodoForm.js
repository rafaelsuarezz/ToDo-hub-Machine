import react from "react";
import './TodoForm.css'

function TodoForm({ addTodo, setOpenModal }) {

    const [newTodoVAlue, setNewTodoVAlue] = react.useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoVAlue)
        setOpenModal(false)
    }

    const onCancel = (event) => {
        event.preventDefault()
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoVAlue(event.target.value)
    }
    


    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo ToDo</label>
            <textarea
                placeholder="Escribe tu nueva Tarea"
                value={newTodoVAlue}
                onChange={onChange}
                required
            />
            <div className="TodoForm-ButtonContainer">
                <button 
                    className="TodoForm-button TodoForm-button--cancel"
                    type="button"
                    onClick={onCancel}
                >Cancelar</button>
                <button 
                    type="submit"
                    className="TodoForm-button  glow-on-hover"
                >Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm }
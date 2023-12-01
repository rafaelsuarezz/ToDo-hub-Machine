import react from "react";
import { useNavigate } from "react-router-dom";
import './TodoForm.css'

function TodoForm(props)  {

    const navigate = useNavigate()

    const [newTodoValue, setNewTodoValue] = react.useState(props.defaultTodoText || "")

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onCancel = (event) => {
        event.preventDefault()
        navigate("/")
    }

    const onSubmit = (event) => {
        event.preventDefault()
        props.submitEvent(newTodoValue)
        navigate("/")
    }


    return (
        <div className="form-container">
            <form onSubmit={onSubmit}>
                <label>
                    {props.label}
                </label>
                <textarea
                    placeholder="Escribe tu nueva Tarea"
                    value={newTodoValue}
                    onChange={onChange}
                    required
                />
                <div className="TodoForm-ButtonContainer">
                    <button 
                        className="TodoForm-button TodoForm-button--cancel"
                        type="button"
                        onClick={onCancel}
                    >
                        Cancelar
                    </button>

                    <button 
                        type="submit"
                        className="TodoForm-button  glow-on-hover"
                    >
                        {props.submitText}
                    </button>
                </div>
            </form>
        </div>
    )
}

export { TodoForm }
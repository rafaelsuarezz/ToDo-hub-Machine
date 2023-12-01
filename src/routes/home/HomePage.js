import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTodos } from '../UseTodos';
import { TodoHeader } from '../../UI/TodoHeader';
import { TodoCounter } from '../../UI/TodoCounter/TodoCounter';
import { TodoSearch } from '../../UI/TodoSearch/TodoSearch'; 
import { TodoList } from '../../UI/TodoList/TodoList';
import { TodoItem } from '../../UI/TodoItem/TodoItem';
import { TodosError } from '../../UI/TodosError/TodosError';
import { TodosLoading } from '../../UI/TodosLoading/TodosLoading';
import { EmptyTodos } from '../../UI/EmptyTodos/EmptyTodos';
import { CreateTodoButton } from '../../UI/CreateTodoButton/CreateTodoButton';
import { TodoTitle } from '../../UI/TodoTitle/TodoTitle';
import { EmptySearchResults } from '../../UI/EmptySearchResults/EmptySearchResults'
import { ChangeAlertWithStorageListener } from '../../UI/ChangeAlert/ChangeAlert';
import '../../routes/App.css';


function HomePage() {
    const navigate = useNavigate()

    const {
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        // openModal,
        // setOpenModal,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        // addTodo,
        sincronizeTodos,
    } = useTodos()

    return (
        <> 
            <TodoTitle />

            <TodoHeader loading={loading} >
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                />

                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    
                />
            </TodoHeader>

            <TodoList
                error={error}
                loading={loading}
                searchedTodos={searchedTodos}
                totalTodos={totalTodos}
                searchText={searchValue}
                onError={() => <TodosError/>}
                onLoading={() => <TodosLoading/>}
                onEmptyTodos={() => <EmptyTodos/>}
                onEmptySearchResults={() => <EmptySearchResults searchText={searchValue} />}

                render={todo => (

                    <TodoItem 
                        key = {todo.id}
                        text = {todo.text}
                        completed = {todo.completed}
                        onEdit = { () => {
                            navigate(
                                "/edit/" + todo.id,
                                { 
                                    state: { todo }
                                }
                            )
                        }}
                        onComplete = { () => completeTodo(todo.id) }
                        onDelete = { () => deleteTodo(todo.id) }
                    />
                )}
            >  
            </TodoList>

            {/* {openModal && (
                <Modal>
                    <TodoForm 
						addTodo={addTodo}
                        setOpenModal={setOpenModal}
					/>
                </Modal>
            )} */}

            <CreateTodoButton 
                onClick={() => navigate("/new")}
                // setOpenModal = { setOpenModal }
            />

            <ChangeAlertWithStorageListener
                sincronize={sincronizeTodos}
            />
        </>
    );

}


export { HomePage }


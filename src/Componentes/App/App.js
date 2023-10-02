
import { useTodos } from './UseTodos';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch'; 
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodosError } from '../TodosError/TodosError';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { TodoForm } from '../TodoForm/TodoForm';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoTitle } from '../TodoTitle/TodoTitle';
import { Modal } from '../Modal/Modal';
import { EmptySearchResults } from '../EmptySearchResults/EmptySearchResults'
import { ChangeAlertWithStorageListener } from '../ChangeAlert/ChangeAlert';
import './App.css';


function App() {
    const {
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        addTodo,
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
                    // loading={loading}
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
                        key = {todo.text}
                        text = {todo.text}
                        completed = {todo.completed}
                        onComplete = { () => completeTodo (todo.text) }
                        onDelete = { () => deleteTodo (todo.text) }
                    />
                )}
            >
                {/* {todo => (
                    <TodoItem 
                        key = {todo.text}
                        text = {todo.text}
                        completed = {todo.completed}
                        onComplete = { () => completeTodo (todo.text) }
                        onDelete = { () => deleteTodo (todo.text) }
                    />
                )} */}
                
            </TodoList>

            {openModal && (
                <Modal>
                    <TodoForm 
						addTodo={addTodo}
                        setOpenModal={setOpenModal}
					/>
                </Modal>
            )}

            <CreateTodoButton 
                setOpenModal = { setOpenModal }
            />

            <ChangeAlertWithStorageListener
                sincronize={sincronizeTodos}
            />
            
        </>
    );

}


export default App;

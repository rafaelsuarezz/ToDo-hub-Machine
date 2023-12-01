import "../TodoList/TodoList.css"

function TodoList({ error, onError, loading, onLoading, onEmptyTodos, searchedTodos, render, totalTodos, onEmptySearchResults, searchText, children }) {

    const renderFunc = children || render

    // Agrega una condición para no mostrar el componente cuando está cargando
    if (loading) {
        return (
            <section className="todolist-container">
                {loading && onLoading()}
            </section>
        );
    }

    return (
        <section className="todolist-container">
            {error && onError()}
            {(!totalTodos && !searchedTodos.length) && onEmptyTodos()}
            {(!!totalTodos && !searchedTodos.length) && onEmptySearchResults(searchText)}
            {searchedTodos.map(renderFunc)}
            
            <ul className="">
                {children}
            </ul>
        </section>
    );
}

export { TodoList };

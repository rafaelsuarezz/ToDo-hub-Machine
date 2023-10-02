import "../TodoTitle/TodoTitle.css";

function TodoTitle() {
    return (
        <>
            <nav>
                <div className="title-container">
                    <h1 className="title-left">
                            Todo
                    </h1>
                    <div className="background-title">
                        <h1 className="title-right">
                            Hub
                        </h1>
                    </div>
                </div>
            </nav>
        </>
    )
}

export { TodoTitle };
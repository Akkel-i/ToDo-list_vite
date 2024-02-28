// import useState form react
import { useState } from "react";
import ToDoTable from "./TodoTable";


function TodoList() {

    // alustetaan statet
    const [description, setDescription] = useState("");
    const [todos, setTodos] = useState([]);
    const [date, setDate] = useState("");

    // Description kenttä tallennus
    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    };
    // Date kentän tallennus
    const handleChangeDate = (event) => {
        setDate(event.target.value);
    };

    // Tallentaa todo-olentoon tiedot ja tyhjentää kentät
    const addTodo = () => {
        setTodos([...todos, { description: description, date: date }]);
        setDescription("");
        setDate("");
    };

    // Delete funktio nappiin
    const handleDelete = (indexToDelete) => {
        setTodos(todos.filter((_, index) => index !== indexToDelete));
    };

    return (
        <>
            <div id="header">
                <h1>ToDo List!!</h1>
            </div>
            <input placeholder="Description" onChange={handleChangeDescription} value={description} type="text" />
            <input placeholder="Date" onChange={handleChangeDate} value={date} type="date" />
            <button onClick={addTodo}>Add</button>

            <ToDoTable todos={todos} deleteEvent={handleDelete} />
        </>
    );
}

export default TodoList;
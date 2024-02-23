// import useState form react
import { useState } from "react";

function TodoList() {

    // alustetaan statet
    const [description, setDescription] = useState("");
    const [todos, setTodos] = useState([]);
    const [date, setDate] = useState("");

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    };
    const handleChangeDate = (event) => {
        setDate(event.target.value);
    };

    const addTodo = () => {
        setTodos([...todos, { description: description, date: date }]);
        setDescription("");
        setDate("");
    };

    const handleDelete = (indexToDelete) => {
        setTodos(todos.filter((_, index) => index !== indexToDelete));
    };

    return (
        <>
        <div id="header">
        <h1>ToDo List!!</h1>
        </div>

        <div id="body">
            <input placeholder="Description" onChange={handleChangeDescription} value={description} />
            <input placeholder="Date" onChange={handleChangeDate} value={date} />
            <button onClick={addTodo}>Add</button>
            <table>
                <tbody>
                <tr>
                    <th>Description</th>
                    <th>Date</th>
                </tr>
                </tbody>
                <tbody>
                    {todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.description}</td>
                            <td>{todo.date}</td>
                            <td> <button onClick={() => handleDelete(index)}>Delete</button> </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    );
}

export default TodoList;
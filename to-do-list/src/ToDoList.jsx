// import useState form react
import { useState } from "react";

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

        <div id="body">
            <input placeholder="Description" onChange={handleChangeDescription} value={description} />
            <input placeholder="Date" onChange={handleChangeDate} value={date} />
            <button onClick={addTodo}>Add</button>
            <table>
                <tbody>
                    {/* Otsikot */}
                <tr>
                    <th>Description</th>
                    <th>Date</th>
                </tr>
                </tbody>
                <tbody>
                    {/* kiertää todo läpi ja tuo tiedot sekä delete-napin */}
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
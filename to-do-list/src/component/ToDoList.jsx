// import useState form react
import { useState } from "react";
import ToDoTable from "./TodoTable";
import ToDoGrid from "./ToDoGrid";


function TodoList() {


    //

    const [todo, setTodo] = useState({ description: "", date: "", priority: "" });
    const [todos, setTodos] = useState([]);




    const handleChange = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    };

    const addTodo = () => {
        setTodos([...todos, todo]);
        setTodo({ description: "", date: "", priority: "" }); // poistaa todos
    };

    const handleDelete = (index) => {
        setTodos(todos.filter((item, i) => i != index));
    };
    /*         const handleDelete = () => {
                setTodos(todos.filter((todo, index) => 
                    index != gridRef.current.getSelectedNodes()[0].id))
              }; */


    // Ykkösvedos alapuolella
    /*     // alustetaan statet
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
        }; */
    // Ykkösvedos loppuu

    return (
        <>
            <div id="header">
                <h1>ToDo List!!</h1>
            </div>
            <input type="description" name="description" placeholder="description" value={todo.description} onChange={handleChange} />
            <input type="date" name="date" placeholder="date" value={todo.date} onChange={handleChange} />
            <input type="priority" name="priority" placeholder="priority" value={todo.priority} onChange={handleChange} />
            {/*             <input placeholder="Description" onChange={handleChangeDescription} value={description} type="text" />
            <input placeholder="Date" onChange={handleChangeDate} value={date} type="date" /> */}
            <button onClick={addTodo}>Add</button>

            {/*             <ToDoTable todos={todos} deleteEvent={handleDelete} /> */}
            <ToDoGrid todos={todos} deleteEvent={handleDelete} />
        </>
    );
}

export default TodoList;
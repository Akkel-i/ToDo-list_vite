// import useState form react
import { useState } from "react";
import ToDoTable from "./TodoTable";
import ToDoGrid from "./ToDoGrid";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from "@mui/x-date-pickers";
import dayjs from 'dayjs';




function TodoList() {


    //

    const [todo, setTodo] = useState({ description: "", date: null, priority: "" });
    const [todos, setTodos] = useState([]);




    const handleChange = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    };

    const handleChangeDate = (date) => {
        setTodo({ ...todo, date: date });
    };

    const addTodo = () => {
        setTodos([...todos, todo]);
        setTodo({ description: "", date: null, priority: "" }); // poistaa todos
    };

    const handleDelete = (index) => {
        setTodos(todos.filter((item, i) => i != index));
    };


    return (
        <>
            {/*             <div id="header">
                <h1>ToDo List!!</h1>
            </div> */}

            <Stack mt={2} direction="row" spacing={2} justifyContent="center" alignItems="center">

                <TextField
                    label="Description"
                    name="description"
                    value={todo.description}
                    onChange={handleChange}
                />

                <MobileDatePicker
                    label="Date"
                    name="date"
                    value={todo.date}
                    onChange={handleChangeDate}
                />
                {/*                 <TextField
                    label="Date"
                    name="date"
                    value={todo.date}
                    onChange={handleChange}
                /> */}

                <TextField
                    label="Priority"
                    name="priority"
                    value={todo.priority}
                    onChange={handleChange}
                />



                <Button variant="outlined" onClick={addTodo}>Add</Button>

            </Stack>

            <ToDoGrid todos={todos} deleteEvent={handleDelete} />
        </>
    );
}

export default TodoList;
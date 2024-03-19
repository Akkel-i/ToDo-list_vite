import { useState } from 'react'
//import './App.css'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TodoList from './component/ToDoList'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/fi';


function App() {

  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fi">
      <Container maxWidth="xl">
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Header bar To-do list!
            </Typography>
          </Toolbar>
        </AppBar>
        <TodoList />
      </Container>
      </LocalizationProvider>
    </>
  );
}

export default App

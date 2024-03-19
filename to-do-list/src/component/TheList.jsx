import { useState } from 'react'
//import './App.css'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/fi';
import { Link, Outlet } from 'react-router-dom';
import TodoList from './ToDoList';

function TheList() {

  return (
    <div className="TheList">

    
    
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

    </div>
  );
}

export default TheList

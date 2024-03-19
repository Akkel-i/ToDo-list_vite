import { useState } from 'react'
import './App.css'

import { Link, Outlet } from 'react-router-dom';
import { Button } from '@mui/material';


function App() {

  return (
    <div className="App">
      <nav>

        <Link to={"/"}>
          <Button variant='outlined' >
            Home</Button>
        </Link>
        <Link to={"/TheList"}>
          <Button variant='outlined'>The List
          </Button>
        </Link>

      </nav>

      <Outlet />
    </div>
  );
}

export default App

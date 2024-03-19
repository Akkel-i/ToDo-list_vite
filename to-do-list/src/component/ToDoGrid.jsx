import { AgGridReact } from "ag-grid-react";
import { useState, useRef } from "react";
import Button from '@mui/material/Button';

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css"; // Material Design theme


export default function ToDoGrid(props) {

    const [columnDefinitions, setColumnDefinitions] = useState([
        { field: 'description', sortable: false, filter: true, floatingFilter: true, minWidth: 450 },
        { field: 'date', filter: true, floatingFilter: true, minWidth: 450 },
        {
            field: 'priority', filter: true, floatingFilter: true, minWidth: 450, 
            cellStyle: params => params.value.toLowerCase() === "high" ? { color: 'red' } : { color: 'black' }
        },
    ]);

    const gridRef = useRef();

    const onDelete = () => {

        const removeID = gridRef.current.getSelectedNodes()[0].id;
        //console.log(removeID);
        props.deleteEvent(removeID);

    }

    return (
        <>
            <Button variant="outlined" color="error" onClick={onDelete}>Poista valittu rivi</Button>
            <div className="ag-theme-material" style={{ width: "100vw", height: 500 }}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowData={props.todos}
                    columnDefs={columnDefinitions}
                    rowSelection="single"
                >
                </AgGridReact>

            </div>
        </>
    );


}
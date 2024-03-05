import { AgGridReact } from "ag-grid-react";
import { useState, useRef } from "react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css"; // Material Design theme


export default function ToDoGrid(props) {

    const [columnDefinitions, setColumnDefinitions] = useState([
        { field: 'description', sortable: false, filter: true, floatingFilter: true },
        { field: 'date', filter: true, floatingFilter: true },
        { field: 'priority', filter: true, floatingFilter: true,
            cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' }
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
        <button onClick={onDelete}>Poista valittu rivi</button>
            <div className="ag-theme-material" style={{ width: 700, height: 500 }}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={ params => gridRef.current = params.api }
                    rowData={props.todos}
                    columnDefs={columnDefinitions}
                    rowSelection="single"
                />
            </div>
        </>
    );


}
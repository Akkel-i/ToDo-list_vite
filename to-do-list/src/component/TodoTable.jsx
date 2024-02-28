
export default function ToDoTable(props) {


    return (

        <div id="body">

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
                    {props.todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.description}</td>
                            <td>{todo.date}</td>
                            <td> <button onClick={() => props.deleteEvent(index)}>Delete</button> </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
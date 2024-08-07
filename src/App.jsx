import { useState, useEffect } from "react";

function App() {
    useEffect(() => {
        fetchData();
    }, []);
    const [todos, setTodos] = useState([]);
    async function fetchData() {
        let url = ` https://jsonplaceholder.typicode.com/todos`;
        const res = await fetch(url);
        const data = await res.json();
        setTodos(data);
    }
    return (
  <div className="overflow-x-auto">
    <table className="table-fixed w-full max-w-3xl mx-auto bg-white shadow-md rounded-lg">
        <thead className="bg-gray-200 border-b">
            <tr>
                <th className="border-r px-4 py-2">Id</th>
                <th className="border-r px-4 py-2">Title</th>
                <th className="border-r px-4 py-2">Completed</th>
            </tr>
        </thead>
        <tbody className="text-center">
            {todos.map(todo => (
                <tr key={todo.id} className="border-b hover:bg-gray-100">
                    <td className="border-r px-4 py-2">{todo.id}</td>
                    <td className="border-r px-4 py-2">{todo.title}</td>
                    <td className="border-r px-4 py-2">{todo.completed ? 'Yes' : 'No'}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

    );
}

export default App;

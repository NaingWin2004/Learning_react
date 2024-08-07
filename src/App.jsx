import { useState, useEffect } from "react";

function App() {
    const [id, setId] = useState("");
    const [error, setError] = useState(false);
    const [title, setTitle] = useState({});
    const getData = async e => {
        e.preventDefault();

        if (id <= 0) {
            setError(true);
            setTitle({});
            setId("");
            return;
        }
        let url = `https://jsonplaceholder.typicode.com/todos/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        setError(false);
        setTitle(data);
        setId("");
    };
    return (
        <form onSubmit={getData}>
            <div className="m-5">
                <input
                    type="number"
                    className="bg-sky-100 py-5 px-1.5 mr-5  outline-none font-bold text-2xl"
                    value={id}
                    onChange={e => setId(e.target.value)}
                    placeholder="Enter between 1 to 200"
                />
                <button
                    className="bg-gray-50 my-3 px-5 py-1.5 rounded font-bold text-[18px] text-red-900 hover:bg-red-900 hover:text-gray-50"
                    type="submit"
                >
                    Get Data
                </button>

                <div className="font-bold text-2xl">
                    {error && <p>please enter 1 to 200</p>}
                    {title.id && (
                        <>
                            <p> User Id - {title.id}</p>
                            <p>Title - {title.title}</p>
                        </>
                    )}
                </div>
            </div>
        </form>
    );
}

export default App;

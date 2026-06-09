import { useEffect, useState } from "react";

const PreBoot = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('')
    const handleSubmit = e => {
        e.preventDefault();
        const formData = {
            title,
            body
        }
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err.message))
    }, [title])

    return (
        <div className="p-10">
            <h1>React Practice</h1>
            <form onSubmit={handleSubmit}>
             <label htmlFor="title">Title: </label>   
            <input id="title" className="input input-primary border" type="text" onChange={(e) => setTitle(e.target.value)} />
            <br /> <br />
            <label htmlFor="body">Body: </label>
            <input id="body" className="input input-primary border" type="text" onChange={(e) => setBody(e.target.value)} />
            <br /> <br />
            <button className="btn ml-2" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PreBoot;
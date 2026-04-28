import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')


    useEffect(() => {
        const loadPost = async () => {
            setLoading(true);
            setError("")
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
                if (!res?.ok) throw new Error('Failed to Load')
                const data = await res.json()
                setPosts(data.slice(0, 10))
                console.log(data); 
              
            }

            catch (err) {
                console.error(err);
                setError(err.message)
            }

            finally {
                setLoading(false)
            }
        }

        loadPost()
    }, [])

    if (loading) return <p>Loading ... </p>

    console.log(posts);
    return (
        <div>
            {
                error && <p className="text-red-600">{error}</p>
            }

            {
                posts?.map(post => (
                    <div key={post.id}>
                        <Card>
                            <p>{post?.id}</p>
                            <h2>{post?.title}</h2>
                        </Card>
                        <Button >
                            <Link to={`/learnParams/${post.id}`}>See More</Link>
                        </Button>
                    </div>
                ))
            }

            {/* /* {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                } */ }

        </div>
    )
};

export default Home;
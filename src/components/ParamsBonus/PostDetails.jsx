import { useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {postId} = useParams()
    const { title, body} = post || {}

    useEffect(() =>{
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => res.json()).then(data => console.log(data))
    }, [postId])


    return (
      <div className="card w-full bg-base-100  shadow-sm">
       
        <div className="card-body">
          <h2 className="card-title">{title} ###{postId}</h2>
          <p>
            {body}
          </p>
          <div className="card-actions justify-end">
            <Link to="/" className="btn btn-primary">Back Home</Link>
          </div>
        </div>
      </div>
    );
};

export default PostDetails;
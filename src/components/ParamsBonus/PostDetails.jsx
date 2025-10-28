// import { useEffect } from "react";

import { Link, useLoaderData, useParams } from "react-router-dom";
import BookMarkContext from "../../context/BookMarkContext";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const PostDetails = () => {
  const { setBookMark } = useContext(BookMarkContext);
  const { setUser } = useContext(UserContext);
  const post = useLoaderData();
  const { postId } = useParams();
  const { title, body } = post || {};

  const handleBookMark = (post) => {
    setBookMark((prev) => [...prev, post]);
    setUser((prev) => ({ ...prev, name: "Dancer Aziz", age: 52 }));
  };

  /*     useEffect(() =>{
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => res.json()).then(data => console.log(data))
    }, [postId])
 */

  return (
    <div className="card w-full bg-base-100  shadow-sm">
      <div className="card-body">
        <h2 className="card-title">
          {title} ###{postId}
        </h2>
        <p>{body}</p>
        <div className="card-actions justify-end">
          <Link to="/" className="btn btn-primary">
            Back Home
          </Link>
          <button
            onClick={() => handleBookMark(post)}
            className="btn btn-secondary"
          >
            Add to Bookmark
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

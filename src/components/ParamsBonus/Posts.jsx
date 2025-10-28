import { Link, useLoaderData } from "react-router-dom";

const Posts = () => {
  const posts = useLoaderData();
  /* {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
} */
  return (
    <div>
      <h2 className="text-center underline">Posts: {posts?.length}</h2>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.body}</p>
              <div className="card-actions justify-end">
                <Link
                  to={`/learnParams/${post.id}`}
                  className="btn btn-primary"
                >
                  View Post
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
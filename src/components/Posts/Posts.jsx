import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import "./Posts.css"


const Posts = () => {

    const posts = useLoaderData()

    return (
        <div>
            <h2>Here are {posts.length} Posts</h2>
            <div className="posts">
                {
                    posts.map((post) => <Post post={post} key={post.id}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;
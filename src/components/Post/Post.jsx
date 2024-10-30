import { Link, useNavigate } from "react-router-dom";
import "./Post.css"

const Post = ({post}) => {
    const {id, title} = post
    const navigate = useNavigate()

    const handleShowDetails = () => {
        navigate(`/post/${id}`)
    }
    return (
      <div className="post">
        <h2>Post No: {id}</h2>
        <h3>{title}</h3>
        {/* <Link to={`/post/${id}`}>Details</Link> */}
        <button onClick={handleShowDetails}>Details</button>
      </div>
    );
};

export default Post;
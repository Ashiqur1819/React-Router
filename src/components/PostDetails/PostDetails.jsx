import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import "./PostDetails.css"

const PostDetails = () => {
    const post = useLoaderData()
    const {title, body} = post;
    const navigate = useNavigate()
    const {userId} = useParams()
    console.log(userId);


    const handleGoBack = () => {
      navigate(-1)
    }
    return (
      <div className="postDetails">
        <h3>{title}</h3>
        <p>{body}</p>
        <h2>
          <i>{userId}</i>
        </h2>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    );
};

export default PostDetails;
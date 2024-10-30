import { Link } from "react-router-dom";
import "./User.css"

const User = ({user}) => {
    const {id, name, email, website} = user
    return (
      <div className="user">
        <h2>{id}</h2>
        <h3>{name}</h3>
        <p>Email: {email}</p>
        <p>Website: {website}</p>
        <Link to={`/user/${id}`}>Details</Link>
      </div>
    );
};

export default User;
import { useLoaderData } from "react-router-dom";
import "./UserDetails.css"

const UserDetails = () => {

    const details = useLoaderData();
    const {name, username, website, address} = details;
    const {street, suite, city, zipcode} = address

    console.log(details)

    return (
        <div className="userDetails">
            <h2>{name}</h2>
            <h3>{username}</h3>
            <h4>{website}</h4>
            <p><span>{street}</span>, <span>{suite}</span></p>
            <p><span>{city}</span>, <span>{zipcode}</span></p>
        </div>
    );
};

export default UserDetails;
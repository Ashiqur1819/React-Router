import { Link, NavLink } from "react-router-dom";
import "./Header.css"



const Header = () => {
    return (
      <div>
        <div>
          {/* <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/services">Services</Link>
          <Link to="/users">Users</Link>
          <Link to="/posts">Posts</Link> */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/posts">Posts</NavLink>

        </div>
      </div>
    );
};

export default Header;
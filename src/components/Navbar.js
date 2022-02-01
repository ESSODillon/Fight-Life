import { Link } from "react-router-dom";

// Styles & Images
import "./Navbar.css";
import Gloves from "../assets/boxing-glove.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Gloves} alt="fight life logo" />
          <span>Fight Life</span>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </div>
  );
}

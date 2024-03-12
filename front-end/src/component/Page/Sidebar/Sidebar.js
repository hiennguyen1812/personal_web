import "./Sidebar.css";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { IoBagHandle } from "react-icons/io5";
import { MdOutlineCastForEducation } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../../image/logo.png";

const Sidebar = () => {
  return (
    <div class="container sidebar">
      <ul className="menu__items">
      <li className="nav-text">
          <Link to="/">
            <img src={logo} />
          </Link>
        </li>

        <li className="nav-text">
          <Link to="/">
            <FaHome />
            <span> Home</span>
          </Link>
        </li>

        <li className="nav-text">
          <Link to="/about">
          <FaUser />
            <span> About</span>
          </Link>
        </li>

        <li className="nav-text">
          <Link to="/project">
          <IoSettings />
            <span> My Project</span>
          </Link>
        </li>

        <li className="nav-text">
          <Link to="/experience">
          <ImProfile />
            <span> Experience</span>
          </Link>
        </li>

        <li className="nav-text">
          <Link to="/skill">
          <IoBagHandle />
            <span> Skills</span>
          </Link>
        </li>

        <li className="nav-text">
          <Link to="/education">
          <MdOutlineCastForEducation />
            <span> Education</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

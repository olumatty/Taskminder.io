import { BsDiamond } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineFolderCopy } from "react-icons/md";
import { GrTask } from "react-icons/gr";
import { LuCalendarCheck2 } from "react-icons/lu";
import { TbArrowBackUp } from "react-icons/tb";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="userinfo">
        <BsDiamond className="user_icon" />
        <h4>TaskMinder.</h4>
      </div>
      <nav className="navigation">
        <ul className="nav_list">
          <li>
            <a href="#">
              <button className="nav0-button">
                <LuLayoutDashboard className="nav-icon" />
                <span>Dashboard</span>
              </button>
            </a>
          </li>

          <li>
            <a href="#">
              <button className="nav1-button">
                <MdOutlineFolderCopy className="nav-icon" />
                <span>Projects</span>
              </button>
            </a>
          </li>

          <li>
            <a href="#">
              <button className="nav2-button">
                <GrTask className="nav-icon" />
                <span>Tasks</span>
              </button>
            </a>
          </li>

          <li>
            <a href="#">
              <button className="nav3-button">
                <LuCalendarCheck2 className="nav-icon" />
                <span>Calender</span>
              </button>
            </a>
          </li>
        </ul>
        <ul className="Logout_side">
          <li>
            <a href="#">
              <button className="nav5-button">
                <TbArrowBackUp className="nav-icon" />
                <span>Logout</span>
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

import { BsSearch, BsChat, BsBell } from "react-icons/bs";
import "./ContentTop.css";
const ContentTop = () => {
  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <input type="text" placeholder="Search" className="input-field" />
        <button>
          <BsSearch className="icons" />
        </button>
      </div>

      <div className="content-top-btns">
        <div className="content-btns">
          <button>
            <BsBell className="content-icons" />
          </button>
          <span className="notification-btn-dot"></span>
        </div>

        <div className="profile img-fit-cover">
          <img
            src="https://images.unsplash.com/photo-1669475535925-a011d7c31d45?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile image"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentTop;

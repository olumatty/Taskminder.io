import { GrInProgress } from "react-icons/gr";
import { GoPencil } from "react-icons/go";
import { HiOutlineTrash } from "react-icons/hi";
import './Inprogress.css';
const InProgress = () => {
  return (
    <div className="inProgress-container">
      <div className="Inprogress-header">
        <GrInProgress className="icon" />
        <span>In Progress</span>
      </div>
      <div className="profile-container">
        <div className="img-fit-cover img-container">
          <div className="Header-profile">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile img"
              className="profile-img"
            />
          </div>
          <div className="profile-icon">
            <GoPencil className="p-icon" />
            <HiOutlineTrash className="p-icon" />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="profile-container">
        <div className="img-fit-cover img-container">
          <div className="Header-profile">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile img"
              className="profile-img"
            />
          </div>
          <div className="profile-icon">
            <GoPencil className="p-icon" />
            <HiOutlineTrash className="p-icon" />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="profile-container">
        <div className="img-fit-cover img-container">
          <div className="Header-profile">
            <img
              src="https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile img"
              className="profile-img"
            />
          </div>
          <div className="profile-icon">
            <GoPencil className="p-icon" />
            <HiOutlineTrash className="p-icon" />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="profile-container">
        <div className="img-fit-cover img-container">
          <div className="Header-profile">
            <img
              src="https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile img"
              className="profile-img"
            />
          </div>
          <div className="profile-icon">
            <GoPencil className="p-icon" />
            <HiOutlineTrash className="p-icon" />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua.
        </p>
      </div>

      
    </div>
  )
};

export default InProgress;

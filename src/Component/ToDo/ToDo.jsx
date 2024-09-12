import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { HiOutlineTrash } from "react-icons/hi";
import "./ToDo.css";
const ToDo = () => {
  return (
    <div className="ToDo-container">
      <div className="ToDo-header">
        <MdCheckBoxOutlineBlank className="icon" />
        <span>To do</span>
      </div>
      <div className="profile-container">
        <div className="img-fit-cover img-container">
          <div className="Header-profile">
            <img
              src="https://images.unsplash.com/photo-1706885093487-7eda37b48a60?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
  );
};

export default ToDo;

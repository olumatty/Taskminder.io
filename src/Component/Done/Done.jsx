import { GoCheckbox } from "react-icons/go";
import { GoPencil } from "react-icons/go";
import { HiOutlineTrash } from "react-icons/hi";
import"./Done.css"

const Done = () => {
  return (
    <div className="Done-container">
      <div className="Done-header">
        <GoCheckbox className="icon" />
        <span>Done</span>
      </div>
      <div className="profile-container">
        <div className="img-fit-cover img-container">
          <div className="Header-profile">
            <img
              src="https://plus.unsplash.com/premium_photo-1664541336979-3765585f5ec1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              src=" https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

export default Done;

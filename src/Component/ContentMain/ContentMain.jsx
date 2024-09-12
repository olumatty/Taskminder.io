import Done from "../Done/Done";
import InProgress from "../InProgress/InProgress";
import Task from "../Task/Task";
import ToDo from "../ToDo/ToDo";
import "./ContentMain.css";
const ContentMain = () => {
  return (
    <div className="contentMain">
      <Task />
      <div className="grid-content">
       <div className="one"><ToDo/> </div>
       <div className="two"><InProgress/></div>
       <div className="three"><Done/></div>
      </div>
    </div>
  );
};

export default ContentMain;

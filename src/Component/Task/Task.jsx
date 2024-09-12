import { TbArrowBackUp, TbArrowForwardUp,TbUsers,TbAdjustmentsHorizontal,TbPlus} from "react-icons/tb";
import "./Task.css"
const Task = () => {
    return (  
        <div className="Task">
            <div className="task-name">
                <h3>Tasks</h3>
            </div>
            <div className="iconandbtns">
                <div className="icons">
                    <TbArrowBackUp className="btn-icons"/>
                    <TbArrowForwardUp className="btn-icons"/>
                    <TbUsers className="btn-icons"/>
                    <TbAdjustmentsHorizontal className="btn-icons"/>
                    <button>
                    <span>New task</span> <TbPlus className="bttn-icons"/>
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default Task;
import { useState } from "react";
import cloneIcon from "../assets/img/clone.svg";
import editIcon from "../assets/img/edit.svg";
import moveIcon from "../assets/img/move.svg";
import trashIcon from "../assets/img/trash.svg";
import DelTasks from "./TaskFunc/DeleteTask";
import DuplicateTask from "./TaskFunc/DuplicateTask";
import EditTask from "./TaskFunc/EditTask";

export default function Task(id) {
    const [showEditTask, setShowEditTask] = useState(false);
    const handleEditTask = () => {
        setShowEditTask(!showEditTask);
    }
    const [showDuplicateTask, setShowDuplicateTask] = useState(false);
    const handleDuplicateTask = () => {
        setShowDuplicateTask(!showDuplicateTask);
    }
    const [showDelTask, setShowDelTask] = useState(false);
    const handleDelTask = () => {
        setShowDelTask(!showDelTask);
    }
    return (
        <div
            className="w-full text-gray-900 justify-between items-center text-xl p-3 bg-gray-400/20 flex">
            <div className="flex">
                <input type="checkbox"
                    className="w-5 h-5 mr-2 checked:bg-blue-500 cursor-pointer"
                />
                <p id="task__name">{id.name}</p>
            </div>
            <div className="flex justify-evenly w-36">
                <button className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" onClick={() => setShowEditTask(true)} type="">
                    <img className="w-5" src={editIcon} alt="Edit task" />
                </button>
                <EditTask data={id} onClose={handleEditTask} visible={showEditTask} />
                <button className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" onClick={() => setShowDuplicateTask(true)} type="">
                    <img className="w-5" src={cloneIcon} alt="Duplicate task" />
                </button>
                <DuplicateTask data={id} onClose={handleDuplicateTask} visible={showDuplicateTask} />
                <button className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" onClick={() => setShowDelTask(true)} type="">
                    <img className="w-5" src={trashIcon} alt="Delete task" />
                </button>
                <DelTasks data={id} onClose={handleDelTask} visible={showDelTask} />
                <button type="" className="hover:cursor-move">
                    <img className="w-2" src={moveIcon} alt="Move task" />
                </button>
            </div>
        </div>
    )
}
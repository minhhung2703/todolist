import { useState, useEffect } from "react";
import downIcon from "../assets/img/downList.svg";
import optIcon from "../assets/img/moreOpts.svg";
import ListOptions from "./ListOptions";
import ListTodo from "./ListTodo";

export default function Lists({headers, props}) {
    const [showTask, setShowTasks] = useState(false);
    const handleClick = () => {
        setShowTasks(!showTask);
    }

    const [showListOptions, setShowListOptions] = useState(false);
    const handleShowOptions = () => {
        setShowListOptions(!showListOptions);
    }

  return (
    <div className="bg-white mt-5 w-full rounded-lg p-4">
        <div className="flex justify-between relative ">
            <div className="flex items-center space-x-3 text-black">
                <button type="button" onClick={handleClick}>
                    <img className="w-4 h-4" src={downIcon} alt="list" />
                </button>
                <p className="text-3xl capitalize">{props.name}</p>
                <p className="text-2xl">-</p>
                <p className="text-xl pt-1 capitalize">{props.description}</p>
            </div>
            <button type="" onClick={handleShowOptions} >
                <img className="w-10" src={optIcon} alt="Options" />
            </button>
            {showListOptions &&(<ListOptions
                url={"http://dev.thanqminh.com:3000/task_lists/" + props.id}
                id={props.id}
                data={props}
                headers={headers}
            />)}
            </div> 
            {showTask && (<ListTodo
                id={props.id}
            />)}
    </div>
  );
}

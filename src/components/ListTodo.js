import axios from "axios";
import { useEffect, useState } from "react";
import addTask from "../assets/img/addTask.svg";
import CreateNewTask from "./CreateNewTask";
import Task from "./Task";

export default function ListTodo(id) {
    const [showCreateTask, setShowCreateTask] = useState(false);
    const [toDos, setToDos] = useState()
    const user = JSON.parse(localStorage.getItem("user-data"));
    const headers = {
        "access-token": user.access_token,
        'uid': user.uid,
        'client': user.client,
    };

    const pathId = id.id
    const getTodo = async () => {
        await axios
            .get(`http://dev.thanqminh.com:3000/task_lists/${pathId}/todos`, { headers: headers })
            .then((res) => {
                setToDos(res.data);
            });
    }
    useEffect(() => {
        getTodo()
    }, [])

    const handleCreateTask = () => {
        setShowCreateTask(!showCreateTask);
    }

    return (
        <div className="my-5">
            <div className="flex">
                <p className="text-xl text-gray-700 text-justify bg-white/90 px-5 py-2 rounded-t-lg border-b-2 border-gray-400">To Do</p>
                <button onClick={() => setShowCreateTask(true)} className="flex items-center py-2 px-4 ml-5 mb-2 rounded-lg  hover:rounded-lg  ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                    <img className="w-5 mr-2" src={addTask} alt="add new task" />
                    <p className="text-xl  font-bold ">New task</p>
                </button>
                <CreateNewTask id={id.id} onClose={handleCreateTask} visible={showCreateTask} />
            </div>
            {toDos && toDos.map((todo) => (
                <Task key={todo.id} listId={pathId} headers={headers} id={todo.id} name={todo.name} />
            ))}
        </div>
    )
}
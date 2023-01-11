import axios from "axios";
import { useEffect, useState } from "react";
import add from "../assets/img/add.svg";
import NewList from "./CreateNewList";
import List from "./List";

export default function UserSpace() {
    const [lists, setLists] = useState([]);
    const user = JSON.parse(localStorage.getItem("user-data"));
    const headers = {
        "access-token": user.access_token,
        'uid': user.uid,
        'client': user.client,
    };
    const [createNewList, setCreateNewList] = useState(false);
    const handleCreate = () => {
        setCreateNewList(!createNewList);
    }
    const getLists = async () => {
        await axios
            .get("http://dev.thanqminh.com:3000/task_lists", { headers: headers })
            .then((res) => {
                setLists(res.data);
            });
    }
    useEffect(() => {
        getLists()
        // console.log(user)
    }, [])
    return (
        <div className="pt-48 pb-10 bg-black bg-repeat flex justify-center">
            <div className="flex flex-col h-screen w-full items-start px-32 ">
                <div className="flex justify-center items-center">
                    <p className="text-6xl font-bold text-white">Your space</p>
                    <button onClick={() => setCreateNewList(true)} className="flex bg-gray-700 px-4 py-2 ml-7 rounded-lg justify-center items-center ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" type="button">
                        <img className="w-5 mr-2" src={add} alt="create list" />
                        <p className="text-xl font-bold">Create new list</p>
                    </button>
                </div>
                <NewList onClose={handleCreate} visible={createNewList} />
                {lists.map((list) => (
                    <List
                        key={list.id}
                        headers={headers}
                        props={list}
                    />
                ))}
            </div>
        </div>
    )
}
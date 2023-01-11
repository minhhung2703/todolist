import ediIcon from "../assets/img/edit.svg";
import trashIcon from "../assets/img/trash.svg";
import cloneIcon from "../assets/img/clone.svg";
import shareIcon from "../assets/img/share.svg";
import {useState} from "react"
import EditList from "./ListFunc/EditList";
import DuplicateList from "./ListFunc/DuplicateList";
import DelList from "./ListFunc/DeleteList";
import ShareList from "./ListFunc/SharingList";
import axios from "axios";

export default function ListOptions (url) {
    const [showEditList, setShowEditList] = useState(false);
    const handleEditList = () => {
        setShowEditList(!showEditList);
    }

    const [showDuplicateList, setShowDuplicateList] = useState(false);
    const handleDuplicateList = () => {
        setShowDuplicateList(!showDuplicateList);
    }

    const [showDeleteList, setShowDeleteList] = useState(false);
    const handleDeleteList = () => {
        setShowDeleteList(!showDeleteList);
    }

    const [showShareList, setShowShareList] = useState(false);
    const handleShareList = () => {
        setShowShareList(!showShareList);
    }
    
    const handleDelete = async() => {
        await axios
        .delete(url.url, {headers:url.headers})
        .then((res) => {

        })
    }
    return (
        <div id="ListOptions" className="absolute right-0 mt-10 w-48 bg-neutral-50 z-10 rounded-lg overflow-hidden border-2 border-gray-500">
            <div onClick={()=> setShowEditList(true)} className="flex items-center py-2 px-4 hover:bg-gray-300 cursor-pointer">
                <img className="w-5 mr-2" src={ediIcon} alt="Edit list"/>
                <p className="text-lg text-gray-700">Edit</p>
            </div>
            <EditList data={url.data} url={url} onClose={handleEditList} visible={showEditList} />
            <div onClick={()=> setShowDuplicateList(true)} className="flex items-center py-2 px-4 hover:bg-gray-300 cursor-pointer">
                <img className="w-5 mr-2" src={cloneIcon} alt="Duplicate list"/>
                <p className="text-lg text-gray-700">Duplicate</p>
            </div>
            <DuplicateList onClose={handleDuplicateList} visible={showDuplicateList}/>
            <div onClick={()=> setShowShareList(true)} className="flex items-center py-2 px-4 hover:bg-gray-300 cursor-pointer">
                <img className="w-5 mr-2" src={shareIcon} alt="Share list"/>
                <p className="text-lg text-gray-700">Sharing</p>
            </div>
            <ShareList onClose={handleShareList} visible={showShareList} />
            <hr />
            <div onClick={()=> setShowDeleteList(true)} className="flex items-center py-2 px-4 hover:bg-gray-300 cursor-pointer" >
                <img className="w-5 mr-2" src={trashIcon} alt="Delete list"/>
                <p className="text-lg text-red-600">Delete</p>
            </div>
            <DelList onClose={handleDeleteList} visible={showDeleteList} handleDel={handleDelete}/>
        </div>
    )
}
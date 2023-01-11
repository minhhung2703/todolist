import leftIcon from "../../assets/img/chevronLeft.svg";
import photo from "../../assets/img/camera.svg";
import logout from "../../assets/img/logout.svg";
import lockIcon from '../../assets/fontawesome/svgs/solid/lock.svg';
import LogIcon from '../../assets/fontawesome/svgs/regular/envelope.svg';
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import LogOut from "../../components/InformLogOut";

export default function ProfilePage() {
  const userRef = useRef();
  const passwordRef = useRef();
  const [showExit, setShowExit] = useState(false);

  const user = JSON.parse(localStorage.getItem("user-data"));

  console.log(user)
  const headers = {
    "access-token": user.access_token,
    'uid': user.uid,
    'client': user.client,
  };

  const handleExit = () => {
    setShowExit(!showExit);
  }

  return (
    <div>
      <div className="relative py-10">
        <Link to="/homepage">
          <button
            type=""
            className=" ml-10 flex items-center py-2 justify-center text-slate-100 w-32 h-10 bg-indigo-600 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          >
            <img className="w-5 h-5" src={leftIcon} alt="Back" />
            <p className="text-2xl font-bold">Back</p>
          </button>
        </Link>
      </div>
      <div className="relative mt-10 ml-20 justify-between flex px-20">
        <div className="flex flex-initial flex-col items-center">
          <p className="text-4xl font-bold mb-5">My Profile</p>
          <div className="block h-96 w-96 rounded-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
              alt="your_image"
            />
            <button className="absolute bottom-56 left-80 bg-gray-500 w-20 h-20 px-5 py-4 rounded-full overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
              <img className="w-12 h-12 " src={photo} alt="" />
            </button>
          </div>
          <div className="relative mt-10">
            <p className="text-3xl font-bold mb-5">{user.dataUser.data.name}</p>
          </div>
          <div className="flex flex-col font-bold">
            <button className="bg-green-700 w-64 text-xl py-4 flex items-center justify-center mb-4 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" type="">Save changes</button>
            <button onClick={() => setShowExit(true)} className="bg-gray-200 w-64 text-xl py-2 flex items-center justify-center mb-4 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-300" type="">
              <img className="w-5 mr-2" src={logout} alt="logout" />
              <div className="py-2 text-red-600  cursor-pointer">Log out</div>
            </button>
          </div>
        </div>
        <div className="flex flex-initial flex-col w-1/2">
          <div className="mb-10">
            <label className="text-xl font-bold">User name</label>
            <div className="flex items-center grow bg-blur rounded-lg px-3 mt-2">
              <input
                type="text"
                className="form-control w-full block py-4 text-md font-normal text-white bg-transparent m-0 "
                placeholder={user.dataUser.data.name}
                maxLength={36}
              />
            </div>
          </div>
          <div className="mb-10">
            <label className="text-xl font-bold">Email</label>
            <div className="flex items-center grow bg-blur rounded-lg px-3 mt-2">
              <img className="w-5 h-5 fill-white" src={LogIcon} alt="" />
              <input
                type="email"
                className="form-control w-full block px-4 py-4 text-md font-normal text-white bg-transparent m-0 "
                placeholder={user.dataUser.data.email}
                maxLength={36}
                ref={userRef}
              />
            </div>
          </div>

          <div className="mb-10">
            <label className="text-xl font-bold">Change Password</label>
            <div className="flex items-center bg-blur rounded-lg px-3 mt-5">
              <img className="flex w-5 h-5 fill-white-0" src={lockIcon} alt="" />
              <input
                type="password"
                className="flex form-control w-full px-4 py-5 text-md font-normal text-white bg-transparent m-0 "
                placeholder="Enter new password"
                maxLength={36}
                ref={passwordRef}
              />
            </div>
            <div className="flex items-center bg-blur rounded-lg px-3 mt-5">
              <img className="flex w-5 h-5 fill-white-0" src={lockIcon} alt="" />
              <input
                type="password"
                className="flex form-control w-full px-4 py-5 text-md font-normal text-white bg-transparent m-0 "
                placeholder="Confirm new password"
                maxLength={36}
              />
            </div>
          </div>
        </div>
      </div>
      <LogOut onClose={handleExit} visible={showExit} />
    </div>
  );
}

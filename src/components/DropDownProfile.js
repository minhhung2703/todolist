import userImg from "../assets/img/user.svg";
import logout from "../assets/img/logout.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios/axios";

export default function DropDownProfile() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user-data"));
  const headers = {
    "access-token": user.access_token,
    'uid': user.uid,
    'client': user.client,
  };
  console.log(headers)
  const handleLogout = async (e) => {
    e.preventDefault();
    console.log(headers);
    try {
      const res = await axios.delete('/auth/sign_out', { headers: headers, }
      );
      console.log(res);
      localStorage.clear();
      console.log("logout successfully");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="absolute right-0 mt-2 w-48 bg-gray-700/90 rounded-lg overflow-hidden"
    >
      <p className="block px-4 py-2 mt-2 text-gray-300">
        User: <span>{user.dataUser.data.name}</span>
      </p>
      <Link to="/profile">
        <div
          className="flex justify-start items-center px-4 py-2 text-gray-300 hover:bg-indigo-500"
        >
          <img className="w-4 mr-2" src={userImg} alt="profile" /> My Profile
        </div>
      </Link>
      <hr />
      <Link to="/" onClick={handleLogout}>
        <div className="flex justify-start items-center px-4 hover:bg-indigo-500">
          <img className="w-5 mr-2" src={logout} alt="logout" />
          <div className="py-2 text-red-600  cursor-pointer"> Log out </div>
        </div>
      </Link>
    </div>
  );
}

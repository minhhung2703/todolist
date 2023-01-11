import search from "../assets/img/search.svg";
import React, { useState, useRef, useEffect } from "react";
import DropDownProfile from "./DropDownProfile";
// import listData from "../constants/listData";
import axios from "axios";

export default function NavBar() {
  const [list, getList] = useState();
  const user = JSON.parse(localStorage.getItem("user-data"));
  const headers = {
    "access-token": user.access_token,
    'uid': user.uid,
    'client': user.client,
  };
  const [isFocus, setIsFocus] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef();

  const [inputValue, setInputValue] = useState("");

  const [showOptions, setShowOptions] = useState(false);
  const handleOnClick = () => {
    setShowOptions(!showOptions);
  };

  const getListTodo = async () => {
    await axios
      .get(`http://dev.thanqminh.com:3000/task_lists`, { headers: headers })
      .then((res) => {
        getList(res.data)
      })
  }

  console.log(list)

  useEffect(() => {
    getListTodo()
  }, [])

  return (
    <nav className="fixed w-full z-50 px-2 sm:px-4 min-[320px]:px-4 py-2.5  bg-[#121212] drop-shadow-custom">
      <div className="container flex flex-wrap justify-between items-center mx-auto">

        <a
          className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          href="/"
        >
          Rain
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            blur
          </span>
        </a>

        <div className="flex md:order-2 space-x-3">
          <div className="bg-blur flex px-2 rounded-lg">
            <img className="w-5 mr-2" src={search} alt="search" />
            <input
              id="search"
              onFocus={() => setIsFocus(true)}
              onBlur={() => {
                if (!isHovered) {
                  setIsFocus(false);
                }
              }}
              value={inputValue}
              onChange={(e) => { setInputValue(e.target.value) }}
              ref={inputRef}
              className=" bg-transparent"
              placeholder="Searching..."
            />
            {isFocus && (
              <div className="absolute top-12 w-56 bg-slate-800/90"
                onMouseEnter={() => {
                  setIsHovered(true);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                }}>
                {list.map((resList, index) => {
                  const isMatch = resList.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
                  return (
                    <div key={index}>
                      {isMatch && (
                        <div
                          className="py-2 px-7 cursor-pointer hover:bg-gray-100 hover:text-slate-900"
                          onClick={() => {
                            setInputValue(list.nameList);
                            inputRef.current.focus();
                          }}
                        >
                          {list.nameList}
                        </div>)}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div onClick={handleOnClick} className="relative">
            <button className="block h-9 w-9 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
                alt="your_image"
              />
            </button>
            {showOptions && <DropDownProfile />}
          </div>
        </div>
      </div>
    </nav>
  );
}

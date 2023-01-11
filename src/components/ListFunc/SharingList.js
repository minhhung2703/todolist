
export default function ShareList({ visible, onClose }) {
    const handleOnClose = (e) => {
      if (e.target.id === "ShareList") onClose();
    };
    if (!visible) return null;
    return (
      <div
        id="ShareList"
        onClick={handleOnClose}
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
      >
        <form method="PUT" className="max-w-xl bg-slate-800/50 h-auto py-5 px-4 rounded-lg">
          <p className="text-xl font-bold ">Share this List</p>
          <p className="text-xl py-3">Sharing <span className="border-b-2 font-bold text-gray-200 border-dashed mx-1"> Shopping List </span> list with all views</p>
          <div className="flex items-center my-5">
            <input
              type="text"
              placeholder="Enter name list"
              className="px-2 py-2 w-full text-lg rounded-l-lg bg-gray-700"
            />
            <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2 text-lg rounded-r-lg ">Invite</button>
          </div>
            <div>
                <p className="font-bold text-xl">User</p>
                <div className="flex items-center my-5">
                    <p
                    className="px-2 py-2 w-56 text-lg rounded-l-lg bg-gray-700 truncate"
                    >cuong.le200222@vnuk.edu.vn</p>
                    <select type="option" className="bg-gray-700 hover:bg-gray-700 px-2 py-3 text-lg border-0 cursor-pointer">
                        <option value="edit">
                            <p>Edit</p>
                        </option>
                        <option value="view">
                            <p>View</p>
                        </option>
                    </select>
                    <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2 text-lg rounded-r-lg ">Invite</button>
                </div>
            </div>          
          <div className="flex items-center justify-end mt-8">
              <button type="button" onClick={onClose} className="bg-gray-700 hover:bg-gray-600 ml-5 px-5 py-2 text-lg rounded-lg ">Done</button>
          </div>
        </form>
      </div>
    );
  }
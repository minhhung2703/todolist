import cloneIcon from "../../assets/img/clone.svg";


export default function DuplicateTask({ visible, onClose }) {
    const handleOnClose = (e) => {
      if (e.target.id === "DuplicateTask") onClose();
    };
    if (!visible) return null;
    return (
      <div
        id="DuplicateTask"
        onClick={handleOnClose}
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
      >
        <form method="POST" className="max-w-xl text-gray-200 bg-slate-800/50 h-auto px-6 py-4 rounded-lg">
          <p className="text-xl font-bold pb-5">Duplicate Task</p>
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Duplicate task"
              className="px-2 py-2 w-full text-lg capitalize rounded-lg bg-gray-700"
            />
          </div>
          <div className="flex items-center justify-end mt-10">
              <button className="bg-gray-700 px-5 py-2 text-lg rounded-lg hover:bg-gray-600" onClick={onClose}>Cancel</button>
              <button type="submit" className="bg-indigo-700 hover:bg-indigo-600 ml-5 px-5 py-2 text-lg rounded-lg ">
                <div className="flex items-center ">
                    <img className="w-5 mr-2" src={cloneIcon} alt="Duplicate task"/>
                    <p className="text-lg ">Duplicate</p>
                </div>
              </button>
          </div>
        </form>
      </div>
    );
  }
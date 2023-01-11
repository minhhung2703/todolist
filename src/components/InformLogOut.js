import warningIcon from "../assets/img/warning.svg"

export default function LogOut({ visible, onClose }) {
    const handleOnClose = (e) => {
      if (e.target.id === "LogOut") onClose();
    };
    if (!visible) return null;
    return (
      <div
        id="LogOut"
        onClick={handleOnClose}
        className="absolute inset-0 h-screen bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
      >
        <form method="DELETE" className="max-w-xl text-gray-200 bg-slate-800/50 h-auto py-4 px-8 rounded-lg">
          <div className="flex flex-col items-center space-x-3">
            <img className="w-10 mb-5" src={warningIcon} alt="delete"/>
            <p>Do you wanna logout ?</p>
          </div>
          <div className="flex items-center justify-center mt-8">
              <button className="bg-blue-700 hover:bg-blue-600 px-5 py-2 text-lg rounded-lg " onClick={onClose}>No</button>
              <button type="submit" className="bg-green-700 hover:bg-green-600 ml-5 px-5 py-2 text-lg rounded-lg ">Yes</button>
          </div>
        </form>
      </div>
    );
  }
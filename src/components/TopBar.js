import { Link } from 'react-router-dom';

export default function TopBar() {
    return (
        <nav className="fixed w-full z-50 px-2 sm:px-4 min-[320px]:px-4 py-2.5  bg-[#121212] drop-shadow-custom">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex items-center">
                    <span className="text-4xl md:text-2xl sm:text-xl min-[320px]:text-xl font-bold uppercase">
                        Logo
                    </span>
                </a>
                <div className="flex md:order-2 space-x-3">
                    <Link to="/signup" >
                        <button className="text-white font-semibold hover:translate-y-1 
                        tracking-wide bg-indigo-600 hover:bg-indigo-800 focus:ring-4 
                        focus:outline-none focus:ring-blue-300 rounded-lg text-md px-5 
                        py-2.5 text-center mr-3 md:mr-0">
                            Sign up
                        </button>
                    </Link>
                    <Link to="/login" >
                        <button className="text-white font-semibold hover:translate-y-1 
                        tracking-wide bg-blur hover:bg-white hover:text-black 
                        focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg 
                        text-md px-5 py-2.5 text-center mr-3 md:mr-0">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}


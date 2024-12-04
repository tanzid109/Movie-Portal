import { NavLink,Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-gradient-to-b from-gray-800 to-gray-900 text-yellow-500 p-4 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#f7e7cea9] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink to="/" className="font-semibold text-base text-[#401F3E]">Home</NavLink>
                            <NavLink to="/userProfile" className="font-semibold text-base  mt-2">All Movies</NavLink>
                            <NavLink to="/updateProfile" className="font-semibold text-base  mt-2">Add Movie</NavLink>
                            <NavLink to="/updateProfile" className="font-semibold text-base mt-2">My Favorites</NavLink>
                        </ul>
                    </div>
                    <div className="flex flex-row-reverse items-center gap-2">
                        <Link to="/" className=" lg:text-3xl lg:font-black text-base text-white">
                            Movie Portal
                        </Link>
                        {/* <img src={logo} className="h-12 hidden lg:block" alt="" /> */}
                    </div>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul
                        className=" p-2">
                        <NavLink to="/" className="font-semibold text-base">Home</NavLink>
                        <NavLink to="/userProfile" className="font-semibold text-base  ml-4">All Movies</NavLink>
                        <NavLink to="/updateProfile" className="font-semibold text-base  ml-4">Add Movie</NavLink>
                        <NavLink to="/updateProfile" className="font-semibold text-base  ml-4">My Favorites</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex justify-center items-center space-x-4 ">
                        <button className="btn btn-outline rounded-br-2xl rounded-tl-3xl font-bold bg-gradient-to-b from-gray-600 to-gray-900 text-yellow-300 uppercase tracking-wide border-purple-500 shadow-md hover:shadow-white hover:scale-105 transition-transform">
                            Log In
                        </button>
                        <button className="btn btn-outline rounded-br-2xl rounded-tl-3xl font-bold bg-gradient-to-b from-gray-600 to-gray-900 text-yellow-300 uppercase tracking-wide border-purple-500 shadow-md hover:shadow-white hover:scale-105 transition-transform">
                            Register
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
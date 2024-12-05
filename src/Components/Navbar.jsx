import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
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
                            <NavLink to="/" className="font-semibold text-base ">Home</NavLink>
                            <NavLink to="/allmovies" className="font-semibold text-base  mt-2">All Movies</NavLink>
                            <NavLink to="/addmovie" className="font-semibold text-base  mt-2">Add Movie</NavLink>
                            <NavLink to="/myfavourite" className="font-semibold text-base mt-2">My Favorites</NavLink>
                        </ul>
                    </div>
                    <div className="flex flex-row-reverse items-center gap-2">
                        <Link to="/" className=" lg:text-3xl lg:font-black text-base text-white">
                            Movie Portal
                        </Link>
                        {/* <img src={logo} className="h-12 hidden lg:block" alt="" /> */}
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul
                        className="p-2">
                        <NavLink to="/" className="font-semibold text-base">Home</NavLink>
                        <NavLink to="/allmovies" className="font-semibold text-base  ml-4">All Movies</NavLink>
                        <NavLink to="/addmovie" className="font-semibold text-base  ml-4">Add Movie</NavLink>
                        <NavLink to="/myfavourite" className="font-semibold text-base ml-4">My Favorites</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        {
                            user && user?.email ?
                                <div className="relative group w-12 h-12">
                                    <img
                                        src={user.photoURL}
                                        alt="Placeholder"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
                                        <span className="text-white text-base font-normal">{user.displayName}</span>
                                    </div>
                                </div> :
                                <FaUser className="text-2xl text-[#fdfdfd] mr-2"></FaUser>
                        }
                    </div>
                    {
                        user && user?.email ? <button onClick={logOut} className="btn btn-outline text-base rounded-br-2xl rounded-tl-3xl font-medium bg-gradient-to-b from-gray-600 to-gray-900 text-yellow-300 uppercase tracking-wide border-purple-500 shadow-md hover:shadow-white hover:scale-105 hover:text-white transition-transform ml-2">Log Out</button> : <Link to="/login" className="btn btn-outline text-base rounded-br-2xl rounded-tl-3xl font-medium bg-gradient-to-b from-gray-600 to-gray-900 text-yellow-300 uppercase tracking-wide border-purple-500 shadow-md hover:shadow-white hover:scale-105 hover:text-white transition-transform">Log In</Link>
                    }
                    <Link to="/register" className="btn btn-outline text-base rounded-br-2xl rounded-tl-3xl font-medium bg-gradient-to-b from-gray-600 to-gray-900 text-yellow-300 uppercase tracking-wide border-purple-500 shadow-md hover:shadow-white hover:scale-105 hover:text-white transition-transform ml-4">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
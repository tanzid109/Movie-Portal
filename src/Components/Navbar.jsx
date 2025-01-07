import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaUser } from "react-icons/fa";
import { DiGhostSmall } from "react-icons/di";
import { RxActivityLog } from "react-icons/rx";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className="sticky top-0 z-[50] backdrop-blur-3xl">
            <div className="navbar bg-gradient-to-b from-gray-800 to-gray-900 text-yellow-500 p-4 ">
                <div className="lg:navbar-start justify-between w-full">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden">
                            <RxActivityLog className="text-3xl hover:scale-75" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gradient-to-b from-gray-800 to-gray-900 rounded-box z-[1] mt-3 p-2 shadow"
                        >
                            <NavLink to="/" className="font-semibold text-base">
                                Home
                            </NavLink>
                            <NavLink to="/allmovies" className="font-semibold text-base mt-2">
                                All Movies
                            </NavLink>
                                {
                                    user && user?.email ?
                                        <NavLink to="/addmovie" className="font-semibold text-base mt-2">
                                            Add Movie
                                        </NavLink> : ""
                                }
                                {
                                    user && user?.email ?
                                        <NavLink to="/myfavourite" className="font-semibold text-base mt-2">
                                            My Favorites
                                        </NavLink> : ""
                                }
                            <NavLink to="/form" className="font-semibold text-base mt-2">
                                FeedBack
                            </NavLink>
                            <div className="flex items-center bg-gray-700 rounded-lg p-2 mt-2">
                                <div>
                                    {user && user?.email ? (
                                        <div className="content relative w-12 h-12 mr-2">
                                            <img
                                                src={user.photoURL}
                                                alt="User"
                                                className="w-full h-full object-cover rounded-full"
                                            />
                                        </div>
                                    ) : (
                                        <FaUser className="text-2xl text-[#fdfdfd] mr-2" />
                                    )}
                                </div>
                                <div className="flex flex-col gap-2 lg:flex-row">
                                    {user && user?.email ? (
                                        <button
                                            onClick={logOut}
                                            className="btn btn-sm text-sm font-medium bg-gradient-to-b from-gray-600 to-gray-900 text-yellow-300 uppercase"
                                        >
                                            Log Out
                                        </button>
                                    ) : (
                                        <Link
                                            to="/login"
                                            className="btn btn-sm text-sm font-medium bg-gradient-to-b from-gray-600 to-gray-900 text-yellow-300 uppercase"
                                        >
                                            Log In
                                        </Link>
                                    )}
                                    <Link
                                        to="/register"
                                        className="btn btn-sm text-sm font-medium bg-gradient-to-b from-gray-600 to-gray-900 text-yellow-300 uppercase"
                                    >
                                        Register
                                    </Link>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div className="flex text-end gap-2">
                        <Link to="/" className="text-3xl font-extrabold text-white">
                            Movie Portal
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="p-2">
                        <NavLink to="/" className="font-semibold text-base">
                            Home
                        </NavLink>
                        <NavLink to="/allmovies" className="font-semibold text-base ml-4">
                            All Movies
                        </NavLink>
                        <NavLink to="/form" className="font-semibold text-base ml-4">
                            FeedBack
                        </NavLink>
                        
                    </ul>
                    <div>
                        {
                            user && user?.email ? <div>
                                <NavLink to="/addmovie" className="font-semibold text-base ml-2">
                                    Add Movie
                                </NavLink>
                                <NavLink to="/myfavourite" className="font-semibold text-base ml-2">
                                    My Favorites
                                </NavLink>
                            </div> : ""
                        }
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <div>
                        {user && user?.email ? (
                            <div className="content relative w-12 h-12">
                                <img
                                    src={user.photoURL}
                                    alt="User"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                        ) : (
                            <FaUser className="text-2xl text-[#fdfdfd] mr-2" />
                        )}
                    </div>
                    <div className="flex flex-col gap-2 lg:flex-row">
                        {user && user?.email ? (
                            <button
                                onClick={logOut}
                                className="btn btn-outline text-base rounded-br-2xl rounded-tl-3xl font-medium bg-gradient-to-b from-gray-600 to-gray-900 text-yellow-300 uppercase tracking-wide border-purple-500 shadow-md hover:shadow-white hover:scale-105 hover:text-white transition-transform ml-2"
                            >
                                Log Out
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                className="btn btn-outline text-base rounded-br-2xl rounded-tl-3xl font-medium bg-gradient-to-b from-gray-600 to-gray-900 text-yellow-300 uppercase tracking-wide border-purple-500 shadow-md hover:shadow-white hover:scale-105 hover:text-white transition-transform"
                            >
                                Log In
                            </Link>
                        )}
                        <Link
                            to="/register"
                            className="btn btn-outline text-base rounded-br-2xl rounded-tl-3xl font-medium bg-gradient-to-b from-gray-600 to-gray-900 text-yellow-300 uppercase tracking-wide border-purple-500 shadow-md hover:shadow-white hover:scale-105 hover:text-white transition-transform"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
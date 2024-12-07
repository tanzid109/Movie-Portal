import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "../Components/Navbar";

const Login = () => {
    const { userLogin, setUser, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate()
    const handleLoginGoogle = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : "/")

            })
            .catch((err) => {
                setError({ ...error, login: err.code });
            })
    }
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        userLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : "/")

            })
            .catch((err) => {
                setError({ ...error, login: err.code });
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="lg:min-h-screen flex justify-center items-center lg:my-2 p-2">
                <div className="card bg-gradient-to-bl from-indigo-700 via-gray-700 to-black text-white w-full max-w-lg shrink-0 p-4 rounded-lg lg:my-4">
                    <h2 className="text-2xl font-bold text-center mt-4">Login Your Account</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-semibold text-base">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-semibold text-base">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'}
                                placeholder="password"
                                name="password"
                                className="input input-bordered text-black"
                                required />
                            <button
                                onClick={() => { setShowPassword(!showPassword) }}
                                className='btn btn-xs absolute right-14 mt-12'>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </button>
                            {
                                error.login && (<label className="label text-base text-red-500 font-medium">
                                    {error.login}
                                </label>)
                            }
                            <label className="label">
                                <p className="label-text-alt link text-base text-white mt-2">Forgot password?</p>
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-outline text-base rounded-br-2xl rounded-tl-3xl font-medium bg-gradient-to-b from-gray-600 to-gray-900 text-yellow-300 uppercase tracking-wide border-purple-500 shadow-md hover:shadow-white hover:scale-105 hover:text-white transition-transform my-2 w-1/2 mx-auto">Login</button>
                        </div>
                    </form>
                    
                    <p className="text-center font-semibold">New here? <Link to="/register" className="text-blue-600">Register Now</Link></p>
                    <div className="divider divider-primary">Or</div>

                    <button onClick={handleLoginGoogle} className="btn btn-outline text-base rounded-br-2xl rounded-tl-3xl font-medium bg-gradient-to-b from-gray-600 to-gray-900 text-yellow-300 uppercase tracking-wide border-purple-500 shadow-md hover:shadow-white hover:scale-105 hover:text-white transition-transform my-2 w-1/2 mx-auto"><FcGoogle className="text-2xl hidden lg:block"></FcGoogle>Login With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
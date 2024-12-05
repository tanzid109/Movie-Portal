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
            <div className=" flex justify-center items-center mt-5">
                <div className="card bg-[#F7E7CE] w-full max-w-lg shrink-0 rounded-lg p-4">
                    <h2 className="text-2xl font-semibold text-center mt-4">Login Your Account</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'}
                                placeholder="password"
                                name="password"
                                className="input input-bordered"
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
                                <Link to="/resetEmail" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center font-semibold">New here? <Link to="/auth/register" className="text-blue-600">Register Now</Link></p>
                    <hr />
                    <button onClick={handleLoginGoogle} className="btn btn-outline w-1/2 mx-auto mt-5 text-base font-bold"><FcGoogle className="text-2xl hidden lg:block"></FcGoogle>Login With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
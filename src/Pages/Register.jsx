import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "../Components/Navbar";

const Register = () => {
    const { createNewUser, user, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState({})
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        if (name.length < 4) {
            setError({ ...error, name: "Must be 4 or more characters" });
            return;
        }
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(photo,email,password,name);
        if (password.length < 5) {
            setError({ ...error, password: "Must be 6 or more characters" });
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError({ ...error, password: "Must be one or more lowercase characters" })
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError({ ...error, password: "Must be one or more uppercase characters" })
            return;
        }
        if (!/[0-9]/.test(password)) {
            setError({ ...error, password: "Must be one or more numbers" })
            return;
        }
        // console.log({ name, photo, email, password });
        createNewUser(email, password)
            .then((result) => {
                const user = result.user
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/")
                    })
                    .catch((err => {
                        // console.log(err);
                        setError(err)
                    }))

            })
            .catch((err) => {
                setError({ ...error, name: err.code });
            })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen flex justify-center items-center">
                <div className="card bg-[#F7E7CE] w-full max-w-lg shrink-0 rounded-none p-4">
                    <h2 className="text-2xl font-semibold text-center mt-4">Register Your Account</h2>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                placeholder="name"
                                className="input input-bordered"
                                name="name"
                                required />
                        </div>
                        {
                            error.name && (<label className="label text-base text-red-500 font-medium">
                                {error.name}
                            </label>)
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text"
                                placeholder="Photo-URL"
                                className="input input-bordered"
                                name="photo"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="email"
                                className="input input-bordered"
                                name="email"
                                required />
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
                        </div>
                        {
                            error.password && (<label className="label text-base text-red-500 font-medium">
                                {error.password}
                            </label>)
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-center font-semibold">Already Have an account? <Link to="/auth/login" className="text-blue-600">Login Now</Link></p>
                </div>
            </div>
        </div>

    );
};

export default Register;
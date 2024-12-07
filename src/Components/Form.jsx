import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Form = () => {
    const navigate =useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // console.log( data);
        Swal.fire({
            title: "Thank You",
            text: "For Your Feedback",
            icon: "success"
        });
        navigate("/")
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-lg mx-auto p-6 bg-gradient-to-bl from-indigo-700 via-gray-700 to-black rounded-lg shadow-lg my-5">
                <h2 className="text-2xl font-bold mb-4 text-center text-yellow-500">Feedback Form</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="form-control">
                        <label className="label" htmlFor="name">
                            <span className="label-text text-base text-white font-bold">Name:</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && (
                            <span className="text-red-500 text-sm">{errors.name.message}</span>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label" htmlFor="email">
                            <span className="label-text text-base text-white font-bold">Email:</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm">{errors.email.message}</span>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label" htmlFor="message">
                            <span className="label-text text-base text-white font-bold">Feedback:</span>
                        </label>
                        <textarea
                            id="message"
                            placeholder="Your feedback..."
                            className="textarea textarea-bordered w-full"
                            rows="4"
                            {...register("message", {
                                required: "Feedback message is required",
                                minLength: {
                                    value: 10,
                                    message: "Feedback must be at least 10 characters",
                                },
                            })}
                        ></textarea>
                        {errors.message && (
                            <span className="text-red-500 text-sm">{errors.message.message}</span>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label" htmlFor="rating">
                            <span className="label-text text-base text-white font-bold">Rating (1-5):</span>
                        </label>
                        <input
                            type="number"
                            id="rating"
                            placeholder="Enter a rating"
                            className="input input-bordered w-full"
                            {...register("rating", {
                                required: "Rating is required",
                                min: { value: 1, message: "Minimum rating is 1" },
                                max: { value: 5, message: "Maximum rating is 5" },
                            })}
                        />
                        {errors.rating && (
                            <span className="text-red-500 text-sm">{errors.rating.message}</span>
                        )}
                    </div>
                    <div className="form-control mt-4">
                        <button type="submit" className="btn btn-primary w-full">
                            Submit Feedback
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;

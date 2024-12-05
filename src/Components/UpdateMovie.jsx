import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import Navbar from './Navbar';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateMovie = () => {
    const data = useLoaderData()
    const {_id}=data;
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        poster: '',
        title: '',
        genre: '',
        duration: '',
        releaseYear: '',
        rating: 0,
        summary: '',
    });

    const [errors, setErrors] = useState({});

    const genres = ['Comedy', 'Drama', 'Horror', 'Action', 'Sci-Fi', 'Romance'];
    const releaseYears = ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014',];

    const validate = () => {
        const newErrors = {};

        // Poster validation
        if (!formData.poster.startsWith('http') || !formData.poster.includes('.')) {
            newErrors.poster = 'Poster must be a valid link.';
        }

        // Title validation
        if (!formData.title || formData.title.length < 2) {
            newErrors.title = 'Title must have at least 2 characters.';
        }

        // Duration validation
        if (!formData.duration || parseInt(formData.duration) <= 60) {
            newErrors.duration = 'Duration must be greater than 60 minutes.';
        }

        // Release year validation
        if (!formData.releaseYear) {
            newErrors.releaseYear = 'Release year is required.';
        }

        // Rating validation
        if (formData.rating === 0) {
            newErrors.rating = 'Rating is required.';
        }

        // Summary validation
        if (!formData.summary || formData.summary.length < 10) {
            newErrors.summary = 'Summary must have at least 10 characters.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form Submitted:', formData);
            setFormData({
                poster: '',
                title: '',
                genre: '',
                duration: '',
                releaseYear: '',
                rating: 0,
                summary: '',
            });
            setErrors({});
            //data send to server

            fetch(`http://localhost:5000/movie/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            title: 'Movie Updated!',
                            icon: 'success',
                        })
                        navigate('/')
                    }
                })
        }
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-6 max-w-sm mx-auto  transition-transform duration-300">
                <h2 className="text-2xl font-bold mb-4">Update Movie </h2>
                <form onSubmit={handleUpdate} className="space-y-4">
                    {/* Movie Poster */}
                    <div>
                        <label className="block font-medium mb-1">Movie Poster (Link):</label>
                        <input
                            type="url"
                            value={formData.poster}
                            name='poster'
                            onChange={(e) => setFormData({ ...formData, poster: e.target.value })}
                            className="input input-bordered w-full"
                        />
                        {errors.poster && <p className="text-red-500 text-sm">{errors.poster}</p>}
                    </div>

                    {/* Movie Title */}
                    <div>
                        <label className="block font-medium mb-1">Movie Title:</label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="input input-bordered w-full"
                            name='title'
                        />
                        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                    </div>

                    {/* Genre */}
                    <div>
                        <label className="block font-medium mb-1">Genre:</label>
                        <select
                            value={formData.genre}
                            onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                            className="select select-bordered w-full"
                            name='genre'
                        >
                            <option value="">Select Genre</option>
                            {genres.map((genre) => (
                                <option key={genre} value={genre}>
                                    {genre}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Duration */}
                    <div>
                        <label className="block font-medium mb-1">Duration (in minutes):</label>
                        <input
                            type="number"
                            value={formData.duration}
                            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                            className="input input-bordered w-full"
                            name='duration'
                        />
                        {errors.duration && <p className="text-red-500 text-sm">{errors.duration}</p>}
                    </div>

                    {/* Release Year */}
                    <div>
                        <label className="block font-medium mb-1">Release Year:</label>
                        <select
                            value={formData.releaseYear}
                            onChange={(e) => setFormData({ ...formData, releaseYear: e.target.value })}
                            className="select select-bordered w-full"
                            name='year'
                        >
                            <option value="">Select Year</option>
                            {releaseYears.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                        {errors.releaseYear && <p className="text-red-500 text-sm">{errors.releaseYear}</p>}
                    </div>

                    {/* Rating */}
                    <div>
                        <label className=" font-medium mb-1 flex">Rating:</label>
                        <Rating className=''
                            onClick={(rate) => setFormData({ ...formData, rating: rate })}
                            ratingValue={formData.rating}
                        />
                        {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>}
                    </div>

                    {/* Summary */}
                    <div>
                        <label className="block font-medium mb-1">Summary:</label>
                        <textarea
                            value={formData.summary}
                            onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                            className="textarea textarea-bordered w-full"
                            rows="4"
                            name='summary'
                        ></textarea>
                        {errors.summary && <p className="text-red-500 text-sm">{errors.summary}</p>}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-full">
                        Update Movie
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateMovie;

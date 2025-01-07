import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ item, movie, setMovie }) => {
    const { _id, poster, title, genre, releaseYear, duration, rating } = item;
    return (
        <div className="card bg-gray-800 shadow-lg text-white hover:scale-105 transition-transform duration-300 rounded-lg p-5">
            <figure>
                <img
                    src={poster}
                    alt="Movie Poster"
                    className="rounded-t-lg h-11/12 w-full object-cover"
                />
            </figure>

            <div className="card-body justify-center items-center p-4">
                <h2 className="card-title text-2xl text-center text-yellow-500 font-bold">{title}</h2>
                <p className="text-sm font-bold">{genre}</p>
                <p className="text-lg font-bold">{duration} min</p>
                <div className="card-actions mt-4">
                    <Link to={`moviedetails/${_id}`} movie={movie} setMovie={setMovie} className="btn btn-outline text-base rounded-br-2xl rounded-tl-3xl font-medium bg-gradient-to-b from-gray-600 to-gray-900 text-yellow-300 uppercase tracking-wide border-purple-500 shadow-md hover:shadow-white hover:scale-105 hover:text-white transition-transform">See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
import React from 'react';

const FavMovieDetails = ({ movie }) => {
    const { _id, poster, title, genre, releaseYear, duration, rating } = movie;
    return (
        <div className="card bg-gray-800 shadow-lg text-white hover:scale-105 transition-transform duration-300 rounded-lg p-5">
            {/* Movie Poster */}
            <figure>
                <img
                    src={poster}
                    alt="Movie Poster"
                    className="rounded-lg h-min object-cover"
                />
            </figure>

            {/* Movie Details */}
            <div className="card-body justify-center items-center p-4">
                <h2 className="card-title text-2xl  font-bold">{title}</h2>
                <p className="text-sm"><strong>Genre : </strong> {genre}</p>
                <p className="text-sm"><strong>Duration : </strong>{duration} min</p>
                <p className="text-sm"><strong>Release Year : </strong> {releaseYear}</p>
                <p className="text-sm"><strong>Rating : </strong> {rating}</p>

                {/* See Details Button */}
                <div className="card-actions mt-4">
                    <button className="btn btn-outline text-base rounded-br-2xl rounded-tl-3xl font-medium bg-gradient-to-b from-gray-600 to-gray-900 text-yellow-300 uppercase tracking-wide border-purple-500 shadow-md hover:shadow-white hover:scale-105 hover:text-white transition-transform">Delete Favourite</button>
                </div>
            </div>
        </div>
    );
};

export default FavMovieDetails;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const FavMovieDetails = ({ movie, movies, setMovies }) => {
    const { _id, poster, title, genre, releaseYear, duration, rating } = movie;
    const navigate = useNavigate()

    const handleDelete = _id => {
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assaingment-10-server.vercel.app/favmovie/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your movie has been deleted.",
                                icon: "success"
                            });
                            const remaining = movies.filter(mov => mov._id !== _id)
                            setMovies(remaining)
                            navigate("/myfavourite")
                        }
                    })
            }
        });
    }

    return (
        <div className="card bg-gray-800 shadow-lg text-white hover:scale-105 transition-transform duration-300 rounded-lg p-5">
            <figure>
                <img
                    src={poster}
                    alt="Movie Poster"
                    className="rounded-lg h-min object-cover"
                />
            </figure>
            <div className="card-body justify-center items-center p-4">
                <h2 className="card-title text-2xl text-center font-bold">{title}</h2>
                <p className="text-sm"><strong>Genre : </strong> {genre}</p>
                <p className="text-sm"><strong>Duration : </strong>{duration} min</p>
                <p className="text-sm"><strong>Release Year : </strong> {releaseYear}</p>
                <p className="text-sm"><strong>Rating : </strong> {rating}</p>
                <div className="card-actions mt-4">
                    <button onClick={() => handleDelete(_id)} className="btn btn-outline text-base rounded-br-2xl rounded-tl-3xl font-medium bg-gradient-to-b from-gray-600 to-gray-900 text-yellow-300 uppercase tracking-wide border-purple-500 shadow-md hover:shadow-white hover:scale-105 hover:text-white transition-transform">Delete Favourite</button>
                </div>
            </div>
        </div>
    );
};

export default FavMovieDetails;
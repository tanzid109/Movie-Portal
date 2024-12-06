import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MovieDetails = ({ movie, setMovie }) => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const { _id, poster, title, genre, releaseYear, duration, rating, summary } = data
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
                fetch(`https://assaingment-10-server.vercel.app/movie/${_id}`, {
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
                            navigate("/allmovies")
                        }
                    })
            }
        });
    }
    const handleFavourite = async () => {
        try {
            const response = await fetch('https://assaingment-10-server.vercel.app/favmovie', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify({ poster, title }),
            });
            const result = await response.json();
            // console.log(result);
            Swal.fire({
                title: "Added!",
                text: "Your movie has been added to favourite.",
                icon: "success"
            });
            navigate("/")
        }
        catch (error) { console.error("There was an error adding the movie to favorites!", error); }
    }
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="min-h-screen flex justify-center items-center px-5 my-5 bg-gray-800 shadow-lg  rounded-lg">
                {/* Movie Poster */}
                <figure>
                    <img
                        src={poster}
                        alt="Movie Poster"
                        className=" p-5"
                    />
                </figure>
                {/* Movie Details */}
                <div className=" justify-center items-center p-4 text-white">
                    <h2 className="text-7xl mb-4 text-yellow-500 uppercase  font-bold">{title}</h2>
                    <p className="text-xl"><strong>Genre : </strong> {genre}</p>
                    <p className="text-xl"><strong>Duration : </strong>{duration} min</p>
                    <p className="text-xl"><strong>Release Year : </strong> {releaseYear}</p>
                    <p className="text-xl"><strong>Rating : </strong> {rating}</p>
                    <p className="text-xl"><strong>Summary : </strong> {summary}</p>
                    <div className="mt-5 flex gap-2">
                        <button onClick={() => handleDelete(_id)} className="btn btn-outline text-base rounded-br-2xl rounded-tl-3xl font-medium bg-gradient-to-b from-gray-600 to-gray-900 text-yellow-300 uppercase tracking-wide border-purple-500 shadow-md hover:shadow-white hover:scale-105 hover:text-white transition-transform">Delete Movie</button>
                        <button onClick={handleFavourite} className="btn btn-outline text-base rounded-br-2xl rounded-tl-3xl font-medium bg-gradient-to-b from-gray-600 to-gray-900 text-yellow-300 uppercase tracking-wide border-purple-500 shadow-md hover:shadow-white hover:scale-105 hover:text-white transition-transform">Add To Favourite</button>
                        <Link to={`/updatemovie/${_id}`} className="btn btn-outline text-base rounded-br-2xl rounded-tl-3xl font-medium bg-gradient-to-b from-gray-600 to-gray-900 text-yellow-300 uppercase tracking-wide border-purple-500 shadow-md hover:shadow-white hover:scale-105 hover:text-white transition-transform">Update Movie</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
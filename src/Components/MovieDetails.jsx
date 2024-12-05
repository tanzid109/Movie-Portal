import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";

const MovieDetails = () => {
    const data = useLoaderData();
    const { _id, poster, title, genre, releaseYear, duration, rating, summary } = data
    const handleFavourite = async () => {
        try {
            const response = await fetch('http://localhost:5000/favmovie', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify({poster,title}),
            });
            const result = await response.json();
            console.log(result);
            alert(`${title} has been added to your favorites!`);
        }
        catch (error) { console.error("There was an error adding the movie to favorites!", error); }
    }
        return (
            <div>
                <div>
                    <Navbar></Navbar>
                </div>
                <div className=" flex justify-center items-center px-5 my-5 bg-gray-800 shadow-lg  rounded-lg">
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
                        <div className="mt-5">
                            <button className="mr-5 btn btn-outline text-base rounded-br-2xl rounded-tl-3xl font-medium bg-gradient-to-b from-gray-600 to-gray-900 text-yellow-300 uppercase tracking-wide border-purple-500 shadow-md hover:shadow-white hover:scale-105 hover:text-white transition-transform">Delete Movie</button>
                            <button onClick={handleFavourite} className="btn btn-outline text-base rounded-br-2xl rounded-tl-3xl font-medium bg-gradient-to-b from-gray-600 to-gray-900 text-yellow-300 uppercase tracking-wide border-purple-500 shadow-md hover:shadow-white hover:scale-105 hover:text-white transition-transform">Add To Favourite</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default MovieDetails;
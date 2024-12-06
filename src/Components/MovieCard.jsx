import { Link, useLoaderData } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const MovieCard = () => {
    const data = useLoaderData()
    return (
        <div className="text-center mb-5">
            <div>
                <p className="text-3xl text-center text-white p-5 bg-gray-900 font-bold mb-5">Featured Movies</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto w-11/12 gap-5'>
                {
                    data.slice(0,6).map((item)=><CategoryCard key={item._id} item={item}></CategoryCard>)
                }
            </div>
            <Link to="/allmovies" className="btn btn-outline rounded-br-2xl rounded-tl-3xl font-bold bg-gradient-to-b from-gray-600 to-gray-900 text-yellow-300 uppercase tracking-wide border-purple-500 shadow-md hover:shadow-white hover:scale-105 hover:text-white transition-transform mt-10">See All Movies</Link>
        </div>
    );
};

export default MovieCard;
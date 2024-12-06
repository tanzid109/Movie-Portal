import React, { useState } from 'react';
import Navbar from './Navbar';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const AllMovies = () => {
    const data =useLoaderData();
    const [movie,setMovie]=useState(data);
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <p className="text-3xl text-center text-white p-5 bg-gray-800 font-bold mb-5">All Movies</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto w-11/12 gap-5'>
                {
                    movie.map((item) => <CategoryCard 
                    movie={movie} 
                    setMovie={setMovie} 
                    item={item}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default AllMovies;
import React from 'react';
import Navbar from './Navbar';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const AllMovies = () => {
    const data =useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <p className="text-3xl text-center text-white p-5 bg-black font-bold">All Movies</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto w-11/12 gap-5'>
                {
                    data.map((item) => <CategoryCard item={item}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default AllMovies;
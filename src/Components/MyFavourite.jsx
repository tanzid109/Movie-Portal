import React, { useState } from 'react';
import Navbar from './Navbar';
import { useLoaderData } from 'react-router-dom';
import FavMovieDetails from './FavMovieDetails';

const MyFavourite = () => {

    const data = useLoaderData();
    const [movies,setMovies]=useState(data)
    console.log(movies);

    return (
        <div>
            <Navbar></Navbar>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto w-11/12 gap-5 mt-5'>
                {
                    data.map(movie=><FavMovieDetails key={movie._id} movie={movie}
                        movies={movies} setMovies={setMovies}
                    ></FavMovieDetails>)
                }
            </div>
        </div>
    );
};

export default MyFavourite;
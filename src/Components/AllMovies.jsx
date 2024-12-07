import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const AllMovies = () => {
    const movies = useLoaderData();
    const [movie, setMovie] = useState(movies);
    const [search, setSearch] = useState("")
    useEffect(() => {
        fetch(`https://assaingment-10-server.vercel.app/movie?searchParams=${search}`)
            .then(res => res.json())
            .then(data => {
                setMovie(data)
            })
    }, [search])
    return (
        <div>
            <Navbar></Navbar>
            <div className="input input-bordered flex items-center gap-2 w-1/2 mx-auto my-2">
                <input type="text" className="grow" placeholder="Search" name='search'
                    onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div>
                <p className="text-3xl text-center text-white p-5 bg-gray-800 font-bold mb-5">All Movies</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto w-11/12 gap-5 mb-5'>
                {
                    movie.map((item) => <CategoryCard
                        key={movie._id}
                        movie={movie}
                        setMovie={setMovie}
                        item={item}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default AllMovies;
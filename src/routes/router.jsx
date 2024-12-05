import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Homepage from "../Pages/Homepage";
import AllMovies from "../Components/AllMovies";
import AddMovie from "../Components/AddMovie";
import MyFavourite from "../Components/MyFavourite";
import Login from "../Pages/Login";
import Register from "../Pages/Register"
import MovieForm from "../Components/MovieForm";
import MovieCard from "../Components/MovieCard";
import MovieDetails from "../Components/MovieDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage></Homepage>,
        loader: () => fetch('http://localhost:5000/movie')      
    },
    {
        path: "/allmovies",
        element: <AllMovies></AllMovies>,
        loader: () => fetch('http://localhost:5000/movie')

    },
    {
        path: "/allmovies/moviedetails/:id",
        element: <MovieDetails></MovieDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/movie/${params.id}`)

    },
    {
        path: "/addmovie",
        element:<MovieForm></MovieForm>
    },
    {
        path: "/myfavourite",
        element: <MyFavourite></MyFavourite>,
        loader: () => fetch('http://localhost:5000/favmovie')
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/register",
        element: <Register></Register>,
    },


]);
export default router;
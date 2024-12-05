import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import MovieCard from "../Components/MovieCard";
const Homepage = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Banner></Banner>
                <MovieCard></MovieCard>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;
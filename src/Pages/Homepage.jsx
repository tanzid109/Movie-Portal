import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import MovieCard from "../Components/MovieCard";
import Ban from "../Components/Ban";
import Theme from "../Components/Theme";
const Homepage = () => {
    return (
        <div className="dark:bg-[#1c1917] light:bg-[#f5f5f4]">
            <header>
                    <Navbar></Navbar>
                <div className="text-center mt-5">
                    <Theme></Theme>
                </div>
            </header>
            <main>
                <Banner></Banner>
                {/* <Ban></Ban> */}
                <MovieCard></MovieCard>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;
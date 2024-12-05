import { FaFacebook,FaInstagram,FaYoutube } from "react-icons/fa";

const Footer = () => {
    const facebook=()=>{
        window.open("https://facebook.com", "_blank")
    }
    const instagram=()=>{
        window.open("https://instagram.com", "_blank")
    }
    const youtube=()=>{
        window.open("https://youtube.com", "_blank")
    }
    return (
        <footer className="footer footer-center bg-gradient-to-b from-gray-800 to-gray-900 text-yellow-500">
            <div>
                <p className="font-bold text-3xl text-white mt-4">
                    Movie Portal
                </p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
            <nav>
                <div className="grid grid-flow-col gap-2 mb-4">
                    <a onClick={facebook} target="blank"><FaFacebook className="text-3xl text-yellow-500"></FaFacebook></a>
                    <a onClick={youtube} target="blank"><FaYoutube className="text-3xl text-yellow-500"></FaYoutube></a>
                    <a onClick={instagram} target="blank"><FaInstagram className="text-3xl text-yellow-500"></FaInstagram></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
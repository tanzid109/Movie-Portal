import React from 'react';

const Buttons = () => {
    return (
        <div className="flex justify-center items-center space-x-4">
            {/* Enter Raffle Button */}
            <button className="btn rounded-br-3xl btn-outline btn-primary bg-gradient-to-b from-gray-800 to-gray-900 text-white uppercase tracking-wide shadow-md hover:scale-105 transition-transform">
                Enter Raffle
            </button>

            {/* Explore Map Button */}
            <button className="btn btn-outline bg-gradient-to-b from-gray-800 to-gray-900 text-white uppercase tracking-wide border-purple-500 shadow-md hover:shadow-purple-500 hover:scale-105 transition-transform">
                Explore Map
            </button>
        </div>
    );
};

export default Buttons;

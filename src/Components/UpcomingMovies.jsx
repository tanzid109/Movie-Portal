import React from 'react';

const UpcomingMovies = () => {
    return (
        <div>
            <div>
                <div>
                    <p className="text-3xl text-center text-white p-5 bg-gray-900 font-bold mb-5">Upcoming Movies</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-5">
                        <div class="w-full shadow-md hover:scale-[1.05] transition-all h-[350px] duration-300 overflow-hidden rounded-md relative cursor-pointer group dark:bg-gray-700 bg-white">
                            <img src="https://i.ibb.co.com/ySRykTr/transformers-age-of-extinction.jpg" alt="Outer Space" class="w-full h-[53%] object-cover group-hover:opacity-40 group-hover:h-full transition-all duration-300 ease-out" />
                            <div class="absolute bottom-0 left-0 py-[10px]  px-[10px] w-full">
                                <h3 class="text-[1.4rem] font-bold uppercase">Transformers</h3>
                                <p>2025-06-22</p>
                                <p>	High-school student Sam Witwicky buys his first car, who is ..</p>
                            </div>
                        </div>
                        <div class="w-full shadow-md hover:scale-[1.05] transition-all h-[350px] duration-300 overflow-hidden rounded-md relative cursor-pointer group dark:bg-gray-700 bg-white">
                            <img src="https://i.ibb.co.com/d6QQtBv/what-if-season.jpg" alt="Outer Space" class="w-full h-[53%] object-cover group-hover:opacity-40 group-hover:h-full transition-all duration-300 ease-out" />
                            <div class="absolute bottom-0 left-0 py-[10px]  px-[10px] w-full">
                                <h3 class="text-[1.4rem] font-bold uppercase">what if</h3>
                                <p>2026-07-22</p>
                                <p>	Exploring pivotal moments from the Marvel Cinematic Universe and turning...</p>
                                
                            </div>
                        </div>
                        <div class="w-full shadow-md hover:scale-[1.05] transition-all h-[350px] duration-300 overflow-hidden rounded-md relative cursor-pointer group dark:bg-gray-700 bg-white">
                            <img src="https://i.ibb.co.com/3fbzF5g/the-way-we-speak.jpg" alt="Outer Space" class="w-full h-[53%] object-cover group-hover:opacity-40 group-hover:h-full transition-all duration-300 ease-out" />
                            <div class="absolute bottom-0 left-0 py-[10px]  px-[10px] w-full">
                                <h3 class="text-[1.4rem] font-bold uppercase">the-way-we-speak</h3>
                                <p>2027-02-18</p>
                                <p>An up-and-coming writer refuses to leave the spotlight when his best...</p>
                            </div>
                        </div>
                        <div class="w-full shadow-md hover:scale-[1.05] transition-all h-[350px] duration-300 overflow-hidden rounded-md relative cursor-pointer group dark:bg-gray-700 bg-white">
                            <img src="https://i.ibb.co.com/pW1z08g/kraven-the-hunter.jpg" alt="Outer Space" class="w-full h-[53%] object-cover group-hover:opacity-40 group-hover:h-full transition-all duration-300 ease-out" />
                            <div class="absolute bottom-0 left-0 py-[10px]  px-[10px] w-full">
                                <h3 class="text-[1.4rem] font-bold uppercase">kraven-the-hunter</h3>
                                <p>2025-08-21</p>
                                <p>	Russian immigrant Sergei Kravinoff is on a mission to prove that he...</p>
                            </div>
                        </div>
                        <div class="w-full shadow-md hover:scale-[1.05] transition-all h-[350px] duration-300 overflow-hidden rounded-md relative cursor-pointer group dark:bg-gray-700 bg-white">
                            <img src="https://i.ibb.co.com/FwjM2sy/canadian-sniper.jpg" alt="Outer Space" class="w-full h-[53%] object-cover group-hover:opacity-40 group-hover:h-full transition-all duration-300 ease-out" />
                            <div class="absolute bottom-0 left-0 py-[10px]  px-[10px] w-full">
                                <h3 class="text-[1.4rem] font-bold uppercase">canadian-sniper</h3>
                                <p>2025-07-17</p>
                                <p>While attempting to peacefully reintegrate into civilian life, an army sniper struggles...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingMovies;

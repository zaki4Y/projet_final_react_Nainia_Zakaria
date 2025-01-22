import React from 'react';
import banner14 from "../../../assets/img/banner-14.jpg";

export const Aboutsection = () => {
    return (
        <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
            <div className="banner h-[35vh] bg-gray-800 dark:bg-gray-800">
                <p className="text-white text-6xl w-full h-[100%] flex justify-center items-center">
                    About
                </p>
            </div>

            <div className="w-full flex justify-center items-center py-16">
                <div className="container p-8 items-center w-[90%] gap-8 flex flex-col lg:flex-row justify-center">
                    <div className="overflow-hidden flex-1 group cursor-pointer relative rounded-xl shadow-xl">
                        <img 
                            src={banner14} 
                            className="transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 w-full object-cover rounded-lg" 
                            alt="About Us Banner" 
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500 rounded-xl"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="text-white text-center transform -translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                                <h3 className="text-2xl font-bold mb-2">Our Story</h3>
                                <p className="text-lg">Discover who we are</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Story</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
                        </p>
                        <blockquote className="p-6 border-l-4 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <p className="text-gray-600 dark:text-gray-300 italic">
                                "Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while."
                            </p>
                            <footer className="mt-2 text-gray-700 dark:text-gray-400">
                                - Steve Job's
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
};

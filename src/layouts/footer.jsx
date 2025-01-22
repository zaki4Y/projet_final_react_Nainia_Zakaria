import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const Footerr = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
            {/* Newsletter Section */}
            <div className="bg-black dark:bg-gray-800 text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                            <p className="text-gray-300">Get updates about our latest products and offers</p>
                        </div>
                        <div className="flex w-full md:w-1/3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-3 rounded-l focus:outline-none text-gray-900 dark:text-white dark:bg-gray-700"
                            />
                            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-r transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                            Zshop<span className="text-red-600">.</span>
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <HiOutlineLocationMarker className="text-xl text-gray-600 dark:text-gray-400 mt-1" />
                                <p className="text-gray-600 dark:text-gray-400">8th floor, 379 Hudson St, New York, NY 10018</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <HiOutlinePhone className="text-xl text-gray-600 dark:text-gray-400" />
                                <p className="text-gray-600 dark:text-gray-400">(+1) 96 716 6879</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <HiOutlineMail className="text-xl text-gray-600 dark:text-gray-400" />
                                <p className="text-gray-600 dark:text-gray-400">contact@zshop.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Categories */}
                    <div>
                        <h5 className="font-bold text-lg mb-6 text-gray-900 dark:text-white">CATEGORIES</h5>
                        <ul className="space-y-3">
                            {['Men', 'Women', 'Dresses', 'Sunglasses'].map((item) => (
                                <li key={item}>
                                    <Link 
                                        to={`/category/${item.toLowerCase()}`}
                                        className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors inline-block"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h5 className="font-bold text-lg mb-6 text-gray-900 dark:text-white">LINKS</h5>
                        <ul className="space-y-3">
                            {['Search', 'About Us', 'Contact Us', 'Returns'].map((item) => (
                                <li key={item}>
                                    <Link 
                                        to={`/${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors inline-block"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h5 className="font-bold text-lg mb-6 text-gray-900 dark:text-white">HELP</h5>
                        <ul className="space-y-3">
                            {['Track Order', 'Returns', 'Shipping', 'FAQs'].map((item) => (
                                <li key={item}>
                                    <Link 
                                        to={`/help/${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors inline-block"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
                    <div className="flex justify-center space-x-6">
                        {[
                            { Icon: FaFacebookF, link: 'https://facebook.com' },
                            { Icon: FaTwitter, link: 'https://twitter.com' },
                            { Icon: FaInstagram, link: 'https://instagram.com' },
                            { Icon: FaPinterestP, link: 'https://pinterest.com' }
                        ].map(({ Icon, link }) => (
                            <a
                                key={link}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white transition-all"
                            >
                                <Icon className="text-lg" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-200 dark:border-gray-700">
                <div className="container mx-auto px-6 py-4">
                    <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                        {new Date().getFullYear()} Zshop. All rights reserved. Designed by{' '}
                        <a
                            href="https://masstechnologist.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                        >
                            MassTechnologist
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

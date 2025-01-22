import React, { useContext } from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuUserSquare } from "react-icons/lu";
import { BsSun, BsMoon } from "react-icons/bs";
import { Navbar } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../utils/ContextProvider';

export const Header = () => {
    const navigate = useNavigate();
    const { cart, darkMode, toggleTheme } = useContext(MyContext);

    return (
        <nav className="relative">
            <Navbar fluid rounded className='bg-white dark:bg-gray-800 shadow-sm transition-colors duration-200'>
                <Navbar.Brand>
                    <Link className="self-center whitespace-nowrap text-4xl font-bold font-playfair text-gray-900 dark:text-white" to="/home">
                        Zshop
                    </Link>
                    <span className='text-red-600 bold text-4xl'>.</span>
                </Navbar.Brand>
                <div className="flex md:order-2 items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {darkMode ? (
                            <BsSun className="text-2xl text-yellow-500" />
                        ) : (
                            <BsMoon className="text-2xl text-gray-700" />
                        )}
                    </button>
                    <div className='flex gap-2'>
                        <i className='text-3xl text-gray-700 dark:text-gray-200'><LuUserSquare /></i>
                        <button 
                            onClick={() => navigate('/cart')} 
                            className='relative text-3xl'
                        >
                            <HiOutlineShoppingBag className="text-gray-700 dark:text-gray-200" />
                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                                    {cart.reduce((total, item) => total + item.quantity, 0)}
                                </span>
                            )}
                        </button>
                    </div>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse className='w-[50vw] text-center font-poppins'>
                    <Link to="/home" className='nav-text text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'>
                        Home
                    </Link>
                    <Link to="/shop" className='nav-text text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'>
                        Shop
                    </Link>
                    <Link to="/about" className='nav-text text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'>
                        About
                    </Link>
                    <Link to="/contact" className='nav-text text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'>
                        Contact
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        </nav>
    );
};

import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuUserSquare } from "react-icons/lu";


import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';

export  const Header = () => {
    const navigate = useNavigate()
    return (
        <nav>
            <Navbar fluid rounded  className='bg-slate-200 p-3'>
      <Navbar.Brand href="https://flowbite-react.com">
        
        <span className="self-center whitespace-nowrap text-4xl font-bold dark:text-white">Zshop</span><span className='text-red-700 bold text-4xl'>.</span>
      </Navbar.Brand >
      <div className="flex md:order-2">
      <div className='flex   gap-2'>
        <i className='text-3xl'><LuUserSquare /></i>
        <i className='text-3xl'><HiOutlineShoppingBag /></i>
      </div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className='w-[50vw] text-center' >
        <Link  to={"/home"} onClick={() => navigate("/")} href="#" className='text-[16px] text-red-500' active>
          Home
        </Link >
        <Link  to={"/shop"} onClick={() => navigate("/shop")} className='text-[16px] hover:text-red-500 '>Shop</Link>
        <Link  to={"/about"} onClick={() => navigate("/about")} className='text-[16px hover:text-red-500 ]'>About</Link>
        <Link   to={"/contact"} onClick={() => navigate("/contact")} className='text-[16px] hover:text-red-500 '>Contact</Link>
      </Navbar.Collapse>
      <div>
        
      </div>
    </Navbar> 
        </nav>
     
        
    );
};


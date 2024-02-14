import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuUserSquare } from "react-icons/lu";


import { Avatar, Dropdown, Navbar } from 'flowbite-react';

export  const Header = () => {
    return (
        <nav>
            <Navbar fluid rounded  className='bg-slate-300 p-5'>
      <Navbar.Brand href="https://flowbite-react.com">
        
        <span className="self-center whitespace-nowrap text-4xl font-bold dark:text-white">Fash</span><span className='text-red-700 bold text-4xl'>.</span>
      </Navbar.Brand >
      <div className="flex md:order-2">
      <div className='flex   gap-2'>
        <i className='text-3xl'><LuUserSquare /></i>
        <i className='text-3xl'><HiOutlineShoppingBag /></i>
      </div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className='w-[50vw] text-center' >
        <Navbar.Link href="#" className='text-[20px]' active>
          Home
        </Navbar.Link >
        <Navbar.Link href="#" className='text-[20px]'>Shop</Navbar.Link>
        <Navbar.Link href="#" className='text-[20px]'>About</Navbar.Link>
        <Navbar.Link href="#" className='text-[20px]'>Contact</Navbar.Link>
      </Navbar.Collapse>
      <div>
        
      </div>
    </Navbar> 
        </nav>
     
        
    );
};


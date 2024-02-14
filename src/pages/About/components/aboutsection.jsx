import React from 'react';
import banner14 from "../../../assets/img/banner-14.jpg";


export const Aboutsection = () => {
    return (
        <>
        <div className="banner h-[35%]">
        <p className="text-white text-6xl w-full h-[100%] flex justify-center items-center">
          About
        </p>
      </div>

     <div className='"w-[100%]  flex justify-center items-center'>
         <div className=' container  p-8 items-center w-[90%]  gap-3  flex justify-center '>
        <div className=' overflow-hidden '>
            <img src={banner14} width={2800} className='hover:scale-110 transition'  alt="" /> 
        </div>

        <div className='h-[100%] m-2 '>
            <h2 className='text-2xl  p-1'>Our story</h2>
            <p className='text-gray-400 w-[70%]'>Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</p>
            <p className='p-5 m-5 text-gray-400 w-[70%] textt'>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. <br />- Steve Job’s</p>
        </div>
        </div>
     </div>
       

     
        </>
    );
};


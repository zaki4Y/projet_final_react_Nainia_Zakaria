import React, { useContext, useEffect, useState } from 'react';
import img10 from "../../../assets/img/item-10.jpg";
import img11 from "../../../assets/img/item-11.jpg";
import img12 from "../../../assets/img/item-12.jpg";
import img13 from "../../../assets/img/item-13.jpg";
import img14 from "../../../assets/img/item-03.jpg";
import img15 from "../../../assets/img/item-04.jpg";

import { useParams } from 'react-router-dom';

import { data } from 'autoprefixer';
import { MyContext } from '../../../utils/ContextProvider';





export const SectionProduct = () => {

    const  [Mydrises, setMyDrises]  = useContext(MyContext)
    const {name} = useParams()

    const productFiter = Mydrises.filter((Mydrises) => Mydrises.title == name )
   
    console.log( productFiter );

    const [count, setCount] = useState(0);
 
  

    useEffect(() => {
        console.log("hello");
    })
    return (
        <>
            <div className=' p-20'>
                <div className='flex'>
                    {
                        productFiter.map((element, index) =>
                            <>
                                <div className="" key={index}>
                                    <div className='flex w-[50vw]'>
                                        <div className='flex flex-col gap-5 overflow-hidden w-[18%]'>
                                            <img className='w-[70%] border-2 border-black hover:scale-110 duration-500' src={element.images} alt="" />
                                            <img className='w-[70%] border-2 border-black hover:scale-110 duration-500' src={element.images} alt="" />
                                            <img className='w-[70%] border-2 border-black hover:scale-110 duration-500' src={element.images} alt="" />
                                            <img className='w-[70%] border-2 border-black hover:scale-110 duration-500' src={element.images} alt="" />
                                            <img className='w-[70%] border-2 border-black hover:scale-110 duration-500' src={element.images} alt="" />
                                            <img className='w-[70%] border-2 border-black hover:scale-110 duration-500' src={element.images} alt="" />
                                        </div>
                                        <img className='h-[100vh] w-[35vw]' src={element.images} alt="" />
                                    </div>

                                </div>

                                <div className='flex flex-col gap-7 py-10 w-[50vw]'>
                                    <h1 className='text-3xl'> {element.name}</h1>
                                    <h3 className='text-3xl'>{element.price}</h3>
                                    <p className='text-l text-gray-600'>{element.desc}</p>
                                    <div className='flex gap-2'>
                                        <button className='border border-orange-500 px-4 py-1 hover:bg-orange-500 duration-500'>S</button>
                                        <button className='border border-orange-500 px-4 py-1 hover:bg-orange-500 duration-500'>M</button>
                                        <button className='border border-orange-500 px-4 py-1 hover:bg-orange-500 duration-500'>X</button>
                                        <button className='border border-orange-500 px-4 py-1 hover:bg-orange-500 duration-500'>XL</button>
                                    </div>

                                    <div className='flex gap-3'>
                                        <button className='bg-gray-500 h-[4vh] w-[4vw]'></button>
                                        <button className='bg-orange-500 h-[4vh] w-[4vw]'></button>
                                        <button className='bg-gray-300 h-[4vh] w-[4vw]'></button>
                                    </div>
                                    <div>
                                        <div className='flex items-center gap-4 bg-slate-300 w-[25%] p-1 rounded-full'>

                                            <div className='flex items-center gap-3 '>
                                                
                                                <button onClick={() => setCount(count + 1)} className=' px-5 rounded-full text-2xl hover:bg-slate-200 duration-300'>+</button>
                                                <h1>{count}</h1>
                                                <button onClick={() => setCount(count - 1)} className=' px-5 rounded-full text-2xl hover:bg-slate-200 duration-300'>-</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex justify-between items-center w-[70%] text-slate-500 text-sm '>
                                        <p>Brand: MyVendor</p>
                                        <p>Categories: boxy , Shirts , sleeveless</p>
                                    </div>

                                    <div className='borderSec'>
                                    </div>

                                    <div className='flex flex-col gap-4'>
                                        <h1 className='text-xl hover:text-orange-400'>Description</h1>
                                        <p className='text-l text-slate-600'>Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
                                            Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
                                            Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat</p>
                                    </div>

                                </div>
                            </>
                        )
                    }
                </div>
            </div>


        </>
    );
        
    
};

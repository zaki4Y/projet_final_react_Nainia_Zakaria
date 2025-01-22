import React, { useContext, useEffect, useState } from 'react';
import img10 from "../../../assets/img/item-10.jpg";
import img11 from "../../../assets/img/item-11.jpg";
import img12 from "../../../assets/img/item-12.jpg";
import img13 from "../../../assets/img/item-13.jpg";
import img14 from "../../../assets/img/item-03.jpg";
import img15 from "../../../assets/img/item-04.jpg";
import { useParams } from 'react-router-dom';
import { MyContext } from '../../../utils/ContextProvider';

export const SectionProduct = () => {
    const { Mydrises, addToCart } = useContext(MyContext);
    const { name } = useParams();
    const productFilter = Mydrises.filter((Mydrises) => Mydrises.title === name);
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (change) => {
        const newQuantity = quantity + change;
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    const handleAddToCart = (product) => {
        const productWithQuantity = {
            ...product,
            quantity: quantity
        };
        addToCart(productWithQuantity);
        // Optional: Show a success message or notification
        alert('Product added to cart!');
    };

    return (
        <>
            <div className='p-20'>
                <div className='flex'>
                    {productFilter.map((element, index) => (
                        <div className="flex flex-col" key={index}>
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
                            <div className="product-details mt-8">
                                <h2 className="text-2xl font-bold mb-4">{element.title}</h2>
                                <p className="text-xl mb-4">{element.price}</p>
                                <div className="quantity-controls flex items-center gap-4 mb-4">
                                    <button 
                                        onClick={() => handleQuantityChange(-1)}
                                        className="px-3 py-1 bg-gray-200 rounded"
                                    >
                                        -
                                    </button>
                                    <span>{quantity}</span>
                                    <button 
                                        onClick={() => handleQuantityChange(1)}
                                        className="px-3 py-1 bg-gray-200 rounded"
                                    >
                                        +
                                    </button>
                                </div>
                                <button 
                                    onClick={() => handleAddToCart(element)}
                                    className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

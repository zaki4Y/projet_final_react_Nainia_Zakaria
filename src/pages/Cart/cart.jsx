import React, { useContext } from 'react';
import { MyContext } from '../../utils/ContextProvider';
import { useNavigate } from 'react-router-dom';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export const Cart = () => {
    const { cart, removeFromCart, updateQuantity } = useContext(MyContext);
    const navigate = useNavigate();

    const calculateTotal = () => {
        return cart.reduce((total, item) => {
            const price = parseFloat(item.price.replace('$', ''));
            return total + (price * item.quantity);
        }, 0).toFixed(2);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                        <HiOutlineShoppingBag className="text-3xl" />
                        Shopping Cart
                    </h1>

                    {cart.length === 0 ? (
                        <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <HiOutlineShoppingBag className="text-6xl text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                            <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">Your cart is empty</p>
                            <button
                                onClick={() => navigate('/shop')}
                                className="px-8 py-3 bg-black dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-200 transform hover:scale-105"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {/* Cart Items */}
                            <div className="space-y-4">
                                {cart.map(item => (
                                    <div 
                                        key={item.id} 
                                        className="flex gap-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-700"
                                    >
                                        <div className="w-32 h-32 flex-shrink-0 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                                            <img 
                                                src={item.images} 
                                                alt={item.title} 
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-medium text-gray-900 dark:text-white text-xl hover:text-red-500 dark:hover:text-red-400 transition-colors cursor-pointer" onClick={() => navigate(`/shop/${item.id}`)}>{item.title}</h3>
                                                    {item.size && (
                                                        <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 block">Size: {item.size}</span>
                                                    )}
                                                </div>
                                                <button 
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 transition-colors p-1"
                                                >
                                                    <IoClose className="text-xl" />
                                                </button>
                                            </div>
                                            <div className="mt-4 flex items-center gap-4">
                                                <span className="text-xl font-semibold text-gray-900 dark:text-white">{item.price}</span>
                                            </div>
                                            <div className="mt-4 flex items-center gap-6">
                                                <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600">
                                                    <button 
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="w-8 text-center text-gray-900 dark:text-white font-medium">{item.quantity}</span>
                                                    <button 
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <span className="text-gray-500 dark:text-gray-400">
                                                    Subtotal: <span className="font-medium text-gray-900 dark:text-white">
                                                        ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Cart Summary */}
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-lg text-gray-600 dark:text-gray-400">Subtotal</span>
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${calculateTotal()}</span>
                                </div>
                                <div className="space-y-4">
                                    <button 
                                        onClick={() => navigate('/checkout')}
                                        className="w-full py-4 bg-black dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-200 transform hover:scale-[1.02] text-lg font-medium"
                                    >
                                        Proceed to Checkout
                                    </button>
                                    <button
                                        onClick={() => navigate('/shop')}
                                        className="w-full py-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors text-sm font-medium"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

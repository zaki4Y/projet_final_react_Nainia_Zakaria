import { createContext, useState, useEffect } from "react"

import img10 from "../assets/img/item-10.jpg";
import img11 from "../assets/img/item-11.jpg";
import img12 from "../assets/img/item-12.jpg";
import img13 from "../assets/img/item-13.jpg";
import img14 from "../assets/img/item-03.jpg";
import img15 from "../assets/img/item-04.jpg";

export const MyContext = createContext()

export const MyProvider = ({ children }) => {
    const [Mydrises, setMyDrises] = useState([
        {
          id: 1,
          title: "Boxy T-Shirt with Roll Sleeve Detail",
          images: img10,
          price: "$20.00",
          category: 'old',
        },
        {
          id: 2,
          title: "Boxy1 T-Shirt with Roll Sleeve Detail",
          images: img11,
          price: "$20.00",
          category: 'old',
        },
        {
          id: 3,
          title: "Boxy3 T-Shirt with Roll Sleeve Detail",
          images: img12,
          price: "$30.00",
          category: 'old',
        },
        {
          id: 4,
          title: "Boxy4 T-Shirt with Roll Sleeve Detail",
          images: img13,
          price: "$10.00",
          category: 'New',
        },
        {
          id: 5,
          title: "Boxy5 T-Shirt with Roll Sleeve Detail",
          images: img14,
          price: "$30.00",
          category: 'New',
        },
        {
          id: 6,
          title: "Boxy6 T-Shirt with Roll Sleeve Detail",
          images: img15,
          price: "$20.00",
          category: 'New',
        },
    ]);

    const [cart, setCart] = useState(() => {
        // Load cart from localStorage on initial load
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const [darkMode, setDarkMode] = useState(() => {
        // Check if user has a theme preference in localStorage
        const savedTheme = localStorage.getItem('theme');
        // Check if user prefers dark mode in their system
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return savedTheme ? savedTheme === 'dark' : prefersDark;
    });

    useEffect(() => {
        // Update document class when theme changes
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        // Save theme preference to localStorage
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(prev => !prev);
    };

    // Add to cart function
    const addToCart = (product) => {
        const existingProduct = cart.find(
            item => item.id === product.id && item.size === product.size
        );
        
        if (existingProduct) {
            setCart(cart.map(item =>
                item.id === product.id && item.size === product.size
                    ? { ...item, quantity: item.quantity + product.quantity }
                    : item
            ));
        } else {
            setCart([...cart, { ...product }]);
        }
    };

    // Remove from cart function
    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    // Update quantity function
    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(productId);
            return;
        }
        setCart(cart.map(item =>
            item.id === productId
                ? { ...item, quantity: newQuantity }
                : item
        ));
    };

    return (
        <MyContext.Provider value={{
            Mydrises,
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            darkMode,
            toggleTheme
        }}>
            {children}
        </MyContext.Provider>
    )
}
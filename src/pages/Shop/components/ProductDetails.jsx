import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaStar, FaShareAlt, FaShippingFast, FaUndo, FaShieldAlt } from 'react-icons/fa';
import { IoMdCheckmark } from 'react-icons/io';
import toast from 'react-hot-toast';
import { MyContext } from '../../../utils/ContextProvider';

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart } = useContext(MyContext);
  
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Get product data from location state or redirect
  const productData = location.state;
  
  useEffect(() => {
    if (!productData) {
      toast.error('Product not found', {
        duration: 2000,
      });
      setTimeout(() => navigate('/shop'), 2000);
    }
  }, [productData, navigate]);

  if (!productData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Product Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Redirecting to shop...
          </p>
        </div>
      </div>
    );
  }

  // Product data with defaults
  const product = {
    id: productData.id,
    title: productData.title,
    price: productData.price,
    images: Array.isArray(productData.images) ? productData.images : [productData.images],
    category: productData.category,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['#000000', '#FFFFFF', '#FF0000', '#0000FF'],
    rating: 4.5,
    reviews: 128,
    stock: 15,
    description: "Experience ultimate comfort with our Premium Cotton T-Shirt. Made from 100% organic cotton, this shirt features a modern fit and exceptional durability. Perfect for casual wear or active lifestyles.",
    features: [
      "100% Organic Cotton",
      "Breathable fabric",
      "Modern fit",
      "Pre-shrunk",
      "Machine washable",
      "Eco-friendly dyes"
    ],
    shipping: "Free shipping on orders over $50",
    returns: "30-day return policy",
    guarantee: "Quality guarantee"
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: `$${product.price}`,
      images: Array.isArray(product.images) ? product.images[0] : product.images,
      quantity: quantity,
      size: selectedSize
    };

    addToCart(cartItem);
    
    toast.success(
      <div className="flex items-center gap-4">
        <span className="font-medium">Added to Cart!</span>
        <button
          onClick={() => navigate('/cart')}
          className="px-3 py-1 bg-red-500 text-white text-sm rounded-full hover:bg-red-600 transition-colors"
        >
          View Cart
        </button>
      </div>,
      {
        duration: 3000,
        icon: '🛒',
      }
    );
  };

  const handleWishlist = () => {
    setIsWishlist(!isWishlist);
    toast.success(
      isWishlist ? 'Removed from wishlist' : 'Added to wishlist',
      {
        icon: '❤️',
      }
    );
  };

  const handleShare = () => {
    const productUrl = window.location.href;
    navigator.clipboard.writeText(productUrl);
    toast.success('Link copied to clipboard!', {
      icon: '🔗',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Breadcrumb */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <button onClick={() => navigate('/')} className="hover:text-red-500 transition-colors">Home</button>
            <span>/</span>
            <button onClick={() => navigate('/shop')} className="hover:text-red-500 transition-colors">Shop</button>
            <span>/</span>
            <span className="text-red-500">{product.title}</span>
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Image Gallery */}
            <div className="space-y-6">
              <div 
                className="relative aspect-w-1 aspect-h-1 w-full rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
              >
                <img
                  src={Array.isArray(product.images) ? product.images[selectedImage] : product.images}
                  alt={product.title}
                  className={`w-full h-[500px] object-cover transition-transform duration-500 ${
                    isZoomed ? 'scale-110' : 'scale-100'
                  }`}
                />
                {product.category && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-black text-white text-sm font-medium rounded-full">
                    {product.category}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[...Array(4)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative rounded-lg overflow-hidden aspect-square ${
                      selectedImage === index ? 'ring-2 ring-red-500' : 'ring-1 ring-gray-200 dark:ring-gray-700'
                    }`}
                  >
                    <img
                      src={Array.isArray(product.images) ? product.images[0] : product.images}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover hover:opacity-75 transition-opacity"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{product.title}</h1>
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={`w-5 h-5 ${
                          index < Math.floor(product.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                  <span className="text-sm text-green-500 flex items-center gap-1">
                    <IoMdCheckmark className="text-lg" />
                    In Stock
                  </span>
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Select Size
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-[3rem] h-12 rounded-lg flex items-center justify-center transition-all duration-200 ${
                          selectedSize === size
                            ? 'bg-black text-white dark:bg-gray-700 ring-2 ring-offset-2 ring-black dark:ring-gray-700'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Quantity
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center rounded-lg border border-gray-300 dark:border-gray-600">
                      <button
                        onClick={() => handleQuantityChange(-1)}
                        className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                      >
                        -
                      </button>
                      <span className="w-12 text-center text-gray-800 dark:text-gray-200 font-medium">
                        {quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(1)}
                        className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {product.stock} items available
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 bg-black dark:bg-gray-700 text-white h-12 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-200 transform hover:scale-[1.02]"
                >
                  <FaShoppingCart className="text-lg" />
                  <span>Add to Cart</span>
                </button>
                <button
                  onClick={handleWishlist}
                  className={`w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-200 ${
                    isWishlist
                      ? 'bg-red-50 text-red-500 dark:bg-red-900/20'
                      : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                  } hover:scale-[1.02]`}
                >
                  <FaHeart className={`text-lg ${isWishlist ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={handleShare}
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 hover:scale-[1.02] transition-all duration-200"
                >
                  <FaShareAlt className="text-lg" />
                </button>
              </div>

              <div className="space-y-6 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Product Description
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Features
                  </h3>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600 dark:text-gray-400"
                      >
                        <IoMdCheckmark className="text-green-500 mr-2 text-lg" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <FaShippingFast className="text-2xl text-gray-400 dark:text-gray-500" />
                  <span className="text-sm">{product.shipping}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <FaUndo className="text-2xl text-gray-400 dark:text-gray-500" />
                  <span className="text-sm">{product.returns}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <FaShieldAlt className="text-2xl text-gray-400 dark:text-gray-500" />
                  <span className="text-sm">{product.guarantee}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

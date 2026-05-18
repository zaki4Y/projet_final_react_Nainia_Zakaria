import { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaHeart, FaStar, FaShareAlt, FaShippingFast, FaUndo, FaShieldAlt, FaCheck, FaMinus, FaPlus } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { MyContext } from '../../../utils/ContextProvider';

export const ProductDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart, toggleWishlist, isInWishlist } = useContext(MyContext);

  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [wishlistId, setWishlistId] = useState(null);

  const productData = location.state;

  useEffect(() => {
    if (productData) setWishlistId(productData.id);
  }, [productData]);

  useEffect(() => {
    if (!productData) {
      toast.error('Product not found');
      setTimeout(() => navigate('/shop'), 2000);
    }
  }, [productData, navigate]);

  if (!productData) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-display italic text-2xl text-muted mb-4">Product Not Found</p>
          <p className="font-body text-sm text-muted">Redirecting to shop...</p>
        </div>
      </div>
    );
  }

  const product = {
    id: productData.id,
    title: productData.title,
    price: productData.price,
    images: Array.isArray(productData.images) ? productData.images : [productData.images],
    category: productData.category,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.5,
    reviews: 128,
    stock: 15,
    description: 'Experience ultimate comfort with our Premium Cotton T-Shirt. Made from 100% organic cotton, this shirt features a modern fit and exceptional durability. Perfect for casual wear or active lifestyles.',
    features: ['100% Organic Cotton', 'Breathable fabric', 'Modern fit', 'Pre-shrunk', 'Machine washable', 'Eco-friendly dyes'],
  };

  const handleQuantityChange = (change) => {
    const n = quantity + change;
    if (n >= 1 && n <= product.stock) setQuantity(n);
  };

  const handleToggleWishlist = () => {
    toggleWishlist({ id: productData.id, title: productData.title, price: productData.price, images: Array.isArray(productData.images) ? productData.images[0] : productData.images });
    toast.success(isInWishlist(productData.id) ? 'Removed from Wishlist' : 'Added to Wishlist');
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: typeof product.price === 'string' ? product.price : `$${product.price}`,
      images: Array.isArray(product.images) ? product.images[0] : product.images,
      quantity,
      size: selectedSize,
    });
    toast.success(
      <div className="flex items-center gap-3">
        <span className="font-body text-sm">Added to Cart!</span>
        <button onClick={() => navigate('/cart')}
          className="px-3 py-1 bg-accent text-white text-xs uppercase tracking-widest font-semibold hover:bg-accent/90 transition-colors">
          View Cart
        </button>
      </div>,
      { duration: 3000 }
    );
  };

  const handleImageMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const priceNum = typeof product.price === 'string'
    ? parseFloat(product.price.replace('$', ''))
    : product.price;

  return (
    <div className="min-h-screen bg-dark pt-20">
      <div className="section-padding py-6">
        <div className="flex items-center gap-3 text-sm">
          <button onClick={() => navigate('/')} className="font-body text-muted hover:text-white transition-colors">Home</button>
          <span className="text-dark-border">/</span>
          <button onClick={() => navigate('/shop')} className="font-body text-muted hover:text-white transition-colors">Shop</button>
          <span className="text-dark-border">/</span>
          <span className="font-body text-accent">{product.title}</span>
        </div>
      </div>

      <div className="section-padding pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="space-y-4">
              <div
                className="relative overflow-hidden bg-dark-secondary border border-dark-border cursor-crosshair group"
                onMouseMove={handleImageMove}
                onMouseLeave={() => setMousePos({ x: 50, y: 50 })}
              >
                <img
                  src={Array.isArray(product.images) ? product.images[selectedImage] : product.images}
                  alt={product.title}
                  className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-200"
                  style={{ transformOrigin: `${mousePos.x}% ${mousePos.y}%`, transform: 'scale(1)' }}
                />
                {product.category && (
                  <span className="absolute top-4 left-4 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 z-10">
                    {product.category}
                  </span>
                )}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, transparent 30%, rgba(0,0,0,0.4) 100%)`,
                  }}
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[0, 1, 2, 3].map((i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === i ? 'border-accent' : 'border-dark-border hover:border-muted/30'
                    }`}
                  >
                    <img
                      src={Array.isArray(product.images) ? product.images[0] : product.images}
                      alt={`${product.title} view ${i + 1}`}
                      className="w-full h-24 md:h-28 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h1 className="font-display text-3xl md:text-4xl text-white leading-tight mb-4">
                  {product.title}
                </h1>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-accent-gold' : 'text-dark-border'}`} />
                    ))}
                    <span className="font-body text-xs text-muted ml-2">({product.reviews} reviews)</span>
                  </div>
                  <span className="flex items-center gap-1.5 font-body text-xs text-green-500">
                    <FaCheck className="text-[10px]" />
                    In Stock
                  </span>
                </div>
                <p className="font-compressed text-6xl md:text-7xl tracking-wider text-accent">
                  ${priceNum.toFixed(2)}
                </p>
              </div>

              <div className="border-t border-dark-border pt-8 space-y-6">
                <div>
                  <p className="font-body text-xs uppercase tracking-widest text-muted mb-3">Select Size</p>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <motion.button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 font-body text-sm font-semibold transition-all duration-300 ${
                          selectedSize === size
                            ? 'bg-accent text-white'
                            : 'bg-dark-card border border-dark-border text-muted hover:border-muted/30 hover:text-white'
                        }`}
                      >
                        {size}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-body text-xs uppercase tracking-widest text-muted mb-3">Quantity</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-dark-border">
                      <button
                        onClick={() => handleQuantityChange(-1)}
                        className="px-4 py-2.5 text-muted hover:text-white hover:bg-dark-card transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <FaMinus className="text-xs" />
                      </button>
                      <span className="w-12 text-center font-body text-white font-semibold">{quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(1)}
                        className="px-4 py-2.5 text-muted hover:text-white hover:bg-dark-card transition-colors"
                        aria-label="Increase quantity"
                      >
                        <FaPlus className="text-xs" />
                      </button>
                    </div>
                    <span className="font-body text-xs text-muted">{product.stock} items available</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <motion.button
                  onClick={handleAddToCart}
                  className="flex-1 bg-accent text-white h-14 flex items-center justify-center gap-3
                             font-body font-semibold text-sm uppercase tracking-widest
                             hover:bg-accent/90 transition-colors"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaShoppingCart className="text-base" />
                  Add to Cart
                </motion.button>
                <motion.button
                  onClick={handleToggleWishlist}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={wishlistId && isInWishlist(wishlistId) ? 'Remove from wishlist' : 'Add to wishlist'}
                  className={`w-14 h-14 flex items-center justify-center border transition-all duration-300 ${
                    wishlistId && isInWishlist(wishlistId) ? 'bg-accent/10 border-accent text-accent' : 'border-dark-border text-muted hover:border-muted/30 hover:text-white'
                  }`}
                >
                  <FaHeart className={`text-lg ${wishlistId && isInWishlist(wishlistId) ? 'fill-current' : ''}`} />
                </motion.button>
                <motion.button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    toast.success('Link copied!');
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Share product"
                  className="w-14 h-14 flex items-center justify-center border border-dark-border text-muted hover:border-muted/30 hover:text-white transition-all"
                >
                  <FaShareAlt className="text-lg" />
                </motion.button>
              </div>

              <div className="border-t border-dark-border pt-8 space-y-6">
                <div>
                  <h2 className="font-display text-xl text-white mb-4">Description</h2>
                  <p className="font-body text-sm text-muted leading-relaxed">{product.description}</p>
                </div>

                <div>
                  <h2 className="font-display text-xl text-white mb-4">Features</h2>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {product.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06 }}
                        className="flex items-center gap-2 font-body text-sm text-muted"
                      >
                        <FaCheck className="text-accent text-xs shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-dark-border pt-8">
                {[
                  { icon: FaShippingFast, text: 'Free shipping on orders over $50' },
                  { icon: FaUndo, text: '30-day return policy' },
                  { icon: FaShieldAlt, text: 'Quality guarantee' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -2 }}
                    className="text-center group"
                  >
                    <item.icon className="text-2xl text-muted group-hover:text-accent transition-colors duration-300 mx-auto mb-2" />
                    <p className="font-body text-[10px] text-muted leading-tight">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { FaMinus, FaPlus, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { MyContext } from '../../utils/ContextProvider';

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(MyContext);
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const subtotal = calculateTotal();
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-dark pt-28 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <HiOutlineShoppingBag className="text-6xl text-muted/60 mx-auto mb-6" />
          <h1 className="font-display italic text-2xl text-muted mb-3">Your cart is empty</h1>
          <p className="font-body text-sm text-muted mb-8">Looks like you haven't added anything yet.</p>
          <motion.button
            onClick={() => navigate('/shop')}
            className="btn-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Continue Shopping
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark pt-28 pb-20">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/shop')} className="text-muted hover:text-white transition-colors" aria-label="Back to shop">
              <FaArrowLeft />
            </button>
            <h1 className="font-compressed text-5xl md:text-6xl tracking-wider text-white">Shopping Cart</h1>
            <span className="font-body text-sm text-muted">({cart.length} items)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {cart.map((item) => {
                const price = parseFloat(item.price.replace('$', ''));
                const lineTotal = price * item.quantity;

                return (
                  <motion.div
                    key={`${item.id}-${item.size}`}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20, height: 0, marginBottom: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-dark-card border border-dark-border p-4 md:p-6 flex gap-4 md:gap-6 group"
                  >
                    <div
                      className="w-20 h-24 md:w-24 md:h-28 shrink-0 bg-dark-secondary overflow-hidden cursor-pointer"
                      onClick={() => navigate(`/shop/${item.id}`)}
                    >
                      <img
                        src={item.images}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h2
                            className="font-body text-white text-sm md:text-base font-medium truncate cursor-pointer hover:text-accent transition-colors"
                            onClick={() => navigate(`/shop/${item.id}`)}
                          >
                            {item.title}
                          </h2>
                          {item.size && (
                            <span className="inline-block mt-1 px-2 py-0.5 bg-dark-border text-muted text-[10px] uppercase tracking-wider font-body">
                              Size: {item.size}
                            </span>
                          )}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-muted/60 hover:text-accent transition-colors shrink-0"
                          aria-label={`Remove ${item.title} from cart`}
                        >
                          <IoClose className="text-lg" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-dark-border">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1.5 text-muted hover:text-white hover:bg-dark-card transition-colors"
                            aria-label={`Decrease quantity of ${item.title}`}
                          >
                            <FaMinus className="text-[10px]" />
                          </button>
                          <span className="w-10 text-center font-body text-sm text-white">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1.5 text-muted hover:text-white hover:bg-dark-card transition-colors"
                            aria-label={`Increase quantity of ${item.title}`}
                          >
                            <FaPlus className="text-[10px]" />
                          </button>
                        </div>
                        <p className="font-compressed text-xl tracking-wider text-white">${lineTotal.toFixed(2)}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-dark-card border border-dark-border p-6 lg:sticky lg:top-28">
              <h2 className="font-compressed text-2xl tracking-wider text-white mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between font-body text-sm">
                  <span className="text-muted">Subtotal</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-body text-sm">
                  <span className="text-muted">Shipping</span>
                  <span className="text-white">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                {shipping > 0 && (
                  <p className="font-body text-[11px] text-muted">
                    Free shipping on orders over $100
                  </p>
                )}
                <div className="border-t border-dark-border pt-3 flex justify-between">
                  <span className="font-body text-white font-semibold">Total</span>
                  <span className="font-compressed text-3xl tracking-wider text-accent">${total.toFixed(2)}</span>
                </div>
              </div>

              <motion.button
                onClick={() => navigate('/checkout')}
                className="w-full bg-accent text-white py-4 flex items-center justify-center gap-3
                           font-body font-semibold text-sm uppercase tracking-widest
                           hover:bg-accent/90 transition-colors"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                Proceed to Checkout
                <FaArrowRight className="text-xs" />
              </motion.button>

              <button
                onClick={() => navigate('/shop')}
                className="w-full text-center font-body text-xs uppercase tracking-widest text-muted hover:text-white transition-colors mt-4"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineShoppingBag, HiX, HiMenu } from 'react-icons/hi';
import { BsSun, BsMoon } from 'react-icons/bs';
import { MyContext } from '../utils/ContextProvider';

const navLinks = [
  { path: '/home', label: 'Home' },
  { path: '/shop', label: 'Shop' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export const Header = () => {
  const { cart, darkMode, toggleTheme } = useContext(MyContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = cart.reduce((t, i) => t + i.quantity, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (path) => {
    if (path === '/home') return location.pathname === '/' || location.pathname === '/home';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark/85 backdrop-blur-xl border-b border-dark-border/50'
            : 'bg-transparent'
        }`}
      >
        <div className="section-padding">
          <div className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'h-16 md:h-20' : 'h-20 md:h-24'
          }`}>
            <Link to="/home" className="flex items-center gap-1 group">
              <motion.span
                className="font-compressed text-4xl md:text-5xl tracking-wider text-white"
                whileHover={{ scale: 1.05 }}
              >
                ZSHOP
              </motion.span>
              <span className="text-accent font-display italic text-2xl md:text-3xl group-hover:rotate-12 transition-transform duration-300">.</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-body font-medium text-sm uppercase tracking-[0.15em] transition-colors duration-300 ${
                    isActive(link.path) ? 'text-white' : 'text-muted hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4 md:gap-6">
              <motion.button
                onClick={toggleTheme}
                className="relative p-3 rounded-full hover:bg-white/5 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                <motion.div
                  key={darkMode ? 'moon' : 'sun'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {darkMode ? (
                    <BsSun className="text-xl text-accent-gold" />
                  ) : (
                    <BsMoon className="text-xl text-muted" />
                  )}
                </motion.div>
              </motion.button>

              <motion.button
                onClick={() => navigate('/cart')}
                className="relative p-3 rounded-full hover:bg-white/5 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Cart"
              >
                <HiOutlineShoppingBag className="text-xl text-white" />
                <AnimatePresence mode="popLayout">
                  {cartCount > 0 && (
                    <motion.span
                      key={cartCount}
                      initial={{ scale: 0, y: -10 }}
                      animate={{ scale: 1, y: 0 }}
                      exit={{ scale: 0, y: 10 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      className="absolute -top-1 -right-1 bg-accent text-white text-[10px] font-bold
                                 w-5 h-5 flex items-center justify-center rounded-full"
                    >
                      {cartCount > 9 ? '9+' : cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <div className="hidden md:block w-px h-6 bg-dark-border" />

              <motion.button
                onClick={() => navigate('/auth')}
                className="hidden md:flex items-center gap-2 font-body text-sm uppercase tracking-[0.1em]
                           text-muted hover:text-white transition-colors"
                whileHover={{ x: 2 }}
                aria-label="Sign In"
              >
                <span className="w-7 h-7 rounded-full border border-dark-border flex items-center justify-center text-xs">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </span>
                Sign In
              </motion.button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 text-white"
                aria-label="Toggle menu"
              >
                {menuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-dark/98 backdrop-blur-xl pt-24"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={link.path}
                    className={`font-compressed text-5xl md:text-6xl tracking-wider transition-colors ${
                      isActive(link.path) ? 'text-accent' : 'text-white hover:text-accent'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-8 border-t border-dark-border w-48 text-center"
              >
                <button
                  onClick={() => { setMenuOpen(false); navigate('/auth'); }}
                  className="font-body text-sm uppercase tracking-[0.15em] text-muted hover:text-white transition-colors"
                >
                  Sign In
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

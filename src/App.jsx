import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { lazy, Suspense, useState, useEffect } from 'react';
import { Header } from './layouts/header';
import { Footerr } from './layouts/footer';
import { MyProvider } from './utils/ContextProvider';
import { Toaster } from 'react-hot-toast';
import { FaArrowUp } from 'react-icons/fa';

const HomePage = lazy(() => import('./pages/Home/home').then(m => ({ default: m.HomePage })));
const About = lazy(() => import('./pages/About/about').then(m => ({ default: m.About })));
const Shop = lazy(() => import('./pages/Shop/shop').then(m => ({ default: m.Shop })));
const Contact = lazy(() => import('./pages/contact/contact').then(m => ({ default: m.Contact })));
const ProductDetails = lazy(() => import('./pages/Shop/components/ProductDetails').then(m => ({ default: m.ProductDetails })));
const Cart = lazy(() => import('./pages/Cart/cart').then(m => ({ default: m.Cart })));
const Checkout = lazy(() => import('./pages/Checkout/checkout').then(m => ({ default: m.Checkout })));
const AuthPage = lazy(() => import('./pages/Auth/AuthPage').then(m => ({ default: m.AuthPage })));

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0 }}
      transition={{ duration: 0.25 }}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-accent text-white flex items-center justify-center
                 shadow-lg shadow-accent/25 hover:bg-accent/90 transition-colors"
      aria-label="Back to top"
    >
      <FaArrowUp />
    </motion.button>
  );
}

function App() {
  const location = useLocation();

    return (
    <>
      <MyProvider>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header/>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: '#1a1a1a',
              color: '#fff',
              padding: '16px',
              borderRadius: '0',
              border: '1px solid #2a2a2a',
            },
          }}
        />
        <main id="main-content">
          <Suspense fallback={
            <div className="min-h-screen bg-dark flex items-center justify-center pt-20">
              <div className="text-center">
                <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="font-body text-sm text-muted">Loading...</p>
              </div>
            </div>
          }>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<AnimatedPage><HomePage /></AnimatedPage>} />
                <Route path="/home" element={<AnimatedPage><HomePage /></AnimatedPage>} />
                <Route path="/shop" element={<AnimatedPage><Shop /></AnimatedPage>} />
                <Route path="/shop/:id" element={<AnimatedPage><ProductDetails /></AnimatedPage>} />
                <Route path="/cart" element={<AnimatedPage><Cart /></AnimatedPage>} />
                <Route path="/checkout" element={<AnimatedPage><Checkout /></AnimatedPage>} />
                <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
                <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
                <Route path="/auth" element={<AnimatedPage><AuthPage /></AnimatedPage>} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>
        <BackToTop />
        <Footerr/>
      </MyProvider>
    </>
  );
}

export default App;

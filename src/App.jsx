import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './layouts/header';
import { HomePage } from './pages/Home/home';
import { About } from './pages/About/about';
import { Shop } from './pages/Shop/shop';
import { Contact } from './pages/contact/contact';
import { Footerr } from './layouts/footer';
import { MyProvider } from './utils/ContextProvider';
import { ProductDetails } from './pages/Shop/components/ProductDetails';
import { Toaster } from 'react-hot-toast';
import { Cart } from './pages/Cart/cart';
import { Checkout } from './pages/Checkout/checkout';
import { AuthPage } from './pages/Auth/AuthPage';

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

function App() {
  const location = useLocation();

  return (
    <>
      <MyProvider>
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
        <Footerr/>
      </MyProvider>
    </>
  );
}

export default App;

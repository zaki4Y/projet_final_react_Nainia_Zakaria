import { Route, Routes } from 'react-router-dom';
import { Header } from './layouts/header';
import { HomePage } from './pages/Home/home';
import { About } from './pages/About/about';
import { Shop } from './pages/Shop/shop';
import { Contact } from './pages/contact/contact';
import { Footerr } from './layouts/footer';
import { MyProvider } from './utils/ContextProvider';
import { Product } from './pages/Product/product';
import { ProductDetails } from './pages/Shop/components/ProductDetails';
import { Toaster } from 'react-hot-toast';
import { Cart } from './pages/Cart/cart';

function App() {
  return (
    <>
      <MyProvider>
        <Header/>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: '#363636',
              color: '#fff',
              padding: '16px',
              borderRadius: '8px',
            },
          }}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
          <Route path="/product/:name" element={<Product />} />
        </Routes>
        <Footerr/>
      </MyProvider>
    </>
  );
}

export default App;

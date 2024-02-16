
import { Route, Routes } from 'react-router-dom';
import { Header } from './layouts/header';
import { HomePage } from './pages/Home/home';
import { About } from './pages/About/about';
import { Shop } from './pages/Shop/shop';
import { Contact } from './pages/contact/contact';
import { Footer } from 'flowbite-react';
import { Footerr } from './layouts/footer';
import { MyProvider } from './utils/ContextProvider';
import { Product } from './pages/Product/product';

function App() {
  return (

    
<>
<MyProvider>
  <Header/>

        <Routes>

          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:name" element={<Product />} />

        </Routes>
        
        <Footerr/>
</MyProvider>
        

      </>
  );
}
export default App;

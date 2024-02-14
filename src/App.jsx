
import { Route, Routes } from 'react-router-dom';
import { Header } from './layouts/header';
import { HomePage } from './pages/Home/home';
import { About } from './pages/About/about';
import { Shop } from './pages/Shop/shop';
import { Contact } from './pages/contact/contact';
import { Footer } from 'flowbite-react';
import { Footerr } from './layouts/footer';
function App() {
  return (

    
<>
        <Header />

        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
        
        <Footerr/>

      </>
  );
}
export default App;

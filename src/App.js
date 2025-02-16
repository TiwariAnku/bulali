import './App.css';
import Home from './Components/Home/Home';    
import { BrowserRouter, Routes, Route } from 'react-router-dom';      
import ProductCard from './Components/Product/ProductCard';
import Products from './Components/Products/Product';
import Allproducts from './Components/Allproducts/Allproducts';
import Logins from './Components/Logins/Logins';
import Fotter from './Components/Fotter/Fotter'; // Ensure this is the correct spelling
import Catalog from './Components/Catalog/Catalog'; // Ensure this is the correct spelling
import Contact from './Components/Contact/Contact'; // Ensure this is the correct spelling
import Allcollection from './Components/Allcollection/Allcol';
import ProductDetails from './Components/ProductDetails/productdetails';
import CartItem from './Components/CartItem/Cart'




function App() {
  return (
    <BrowserRouter>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-card" element={<ProductCard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/logins" element={<Logins />} />
          <Route path="/catalog" element={<Catalog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Allcollection" element={<Allcollection />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/CartItem" element={<CartItem />} />
        <Route path="/Cart" element={<Cart />} />


        </Routes>
      </div>
      <Fotter /> {/* Correctly placed Footer outside Routes */}
    </BrowserRouter>
  );
}

export default App;

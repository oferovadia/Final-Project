import AllProducts from './components/Carousel/AllProducts';
import './App.css';
import Login from './components/Login/Login';
import About from './components/About/About';
import NavbarComp from './components/Navbar/Navbar';
import ProductPage from './components/ProductPage/ProductPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import Customers from './components/testing/component';
import Cart from './components/Cart/Cart';
import ContactUs from './components/ContactUs/ContactUs';
import Checkout from './components/Checkout/Checkout';
import Wishlist from './components/Wishlist/Wishlist';

function App() {
  return (
    <div className="App">
      <NavbarComp></NavbarComp>
      <Routes>
        <Route path='/' element={<AllProducts></AllProducts>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signUp' element={<SignUp></SignUp>} />
        <Route path='/product' element={<ProductPage></ProductPage>} />
        <Route path='/product/:id' element={<ProductPage></ProductPage>} />
        <Route path='/products' element={<AllProducts></AllProducts>}>
          <Route path='category/:categoryName' element={<AllProducts></AllProducts>} />
        </Route>
        <Route path='/products/:id' element={<ProductPage></ProductPage>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/cart' element={<Cart></Cart>} />
        <Route path='/checkout' element={<Checkout></Checkout>} />
        <Route path='/contactUs' element={<ContactUs></ContactUs>} />
        <Route path='/wishlist' element={<Wishlist></Wishlist>} />

      </Routes>
    </div>
  );
}

export default App;

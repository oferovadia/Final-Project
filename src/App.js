import AllProducts from './components/Carousel/AllProducts';
import './App.css';
import Login from './components/Login/Login';
import About from './components/About/About';
import NavbarComp from './components/Navbar/Navbar';
import ProductPage from './components/ProductPage/ProductPage';
import ProductPage2 from './components/ProductPage/ProductPageCopy';
import { Navigate, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import Customers from './components/testing/component';
import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout';
import MyOrders from './components/Orders/Orders';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
      <NavbarComp></NavbarComp>
      <Routes>
        <Route path='/' element={<AllProducts></AllProducts>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signUp' element={<SignUp></SignUp>} />
        <Route path='/product' element={<ProductPage></ProductPage>} />
        <Route path='/product2' element={<ProductPage2></ProductPage2>} />
        <Route path='/products' element={<AllProducts></AllProducts>}>
          <Route path=':categoryName' element={<AllProducts></AllProducts>} />
        </Route>
        <Route path='/about' element={<About></About>} />
        <Route path='/cart' element={<Cart></Cart>} />
        <Route path='/checkout' element={<Checkout></Checkout>} />
        <Route path='/orders' element={<MyOrders></MyOrders>} />
        <Route path='/contactUs' element={<ContactUs></ContactUs>} />
      </Routes>
    </div>
  );
}

export default App;

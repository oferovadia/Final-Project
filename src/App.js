import AllProducts from './components/Carousel/AllProducts';
import './App.css';
import Login from './components/Login/Login';
import About from './components/About/About';
import NavbarComp from './components/Navbar/Navbar';
import ProductPage from './components/ProductPage/ProductPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import Customers from './components/testing/component';

function App() {
  return (
    <div className="App">
      <NavbarComp></NavbarComp>
      <Routes>
        <Route path='/' element={<Login></Login>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signUp' element={<SignUp></SignUp>} />
        <Route path='/product' element={<ProductPage></ProductPage>} />
        <Route path='/products' element={<AllProducts></AllProducts>} />
        <Route path='/about' element={<About></About>} />
      </Routes>
    </div>
  );
}

export default App;

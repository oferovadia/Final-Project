import AllProducts from './components/Carousel/AllProducts';
import './App.css';
import Login from './components/Login/Login';
import About from './components/About/About';
import NavbarComp from './components/Navbar/Navbar';
import ProductPage from './components/ProductPage/ProductPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavbarComp></NavbarComp>
      <Routes>
        <Route path='/login' element={<Login></Login>} />
        <Route path='/product' element={<ProductPage></ProductPage>} />
        <Route path='/products' element={<AllProducts></AllProducts>} />
        <Route path='/about' element={<About></About>} />

      </Routes>

      
    </div>
  );
}

export default App;

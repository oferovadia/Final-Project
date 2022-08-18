import AllProducts from './components/Carousel/AllProducts';
import './App.css';
import Login from './components/Login/Login';
import NavbarComp from './components/Navbar/Navbar';
import ProductPage from './components/ProductPage/ProductPage';

function App() {
  return (
    <div className="App">
      <NavbarComp></NavbarComp>
      <ProductPage></ProductPage>
    </div>
  );
}

export default App;

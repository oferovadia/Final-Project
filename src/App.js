import { Nav } from 'react-bootstrap';
import AllProducts from './components/Carousel/AllProducts';
import './App.css';
import Login from './components/Login/Login';
import NavbarComp from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <NavbarComp></NavbarComp>
      <AllProducts></AllProducts>
    </div>
  );
}

export default App;

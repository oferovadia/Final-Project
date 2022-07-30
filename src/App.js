import { Nav } from 'react-bootstrap';
import './App.css';
import Login from './components/Login/Login';
import NavbarComp from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <NavbarComp></NavbarComp>
      <Login></Login>
    </div>
  );
}

export default App;

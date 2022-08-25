import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form, Popover, OverlayTrigger, Button } from 'react-bootstrap';
import whiteLogo from './whiteLogo.png'; // with import
import { BsFillPersonFill, BsCart2, BsFillSuitHeartFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import "./Navbar.css";

function NavbarComp() {
    return (
        <div>
            <Navbar className='navbar1' collapseOnSelect expand="md" variant="dark">
                <Container>
                    <Navbar.Brand href="#Home"><img className='siteLogo' src={whiteLogo} alt='hero'></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='navBarOption' as={Link} to='/login'>Home</Nav.Link>
                            <Nav.Link className='navBarOption' as={Link} to='/about'>About Us</Nav.Link>
                            <NavDropdown className='navBarOption' title="Categories" id="collasible-nav-dropdown">
                                <NavDropdown.Item className='dropDownNavOption' as={Link} to='/product'>Clothes</NavDropdown.Item>
                                <NavDropdown.Item className='dropDownNavOption' as={Link} to='/login'>Comics</NavDropdown.Item>
                                <NavDropdown.Item className='dropDownNavOption' as={Link} to='/login'>Figures</NavDropdown.Item>
                                <NavDropdown.Item className='dropDownNavOption' as={Link} to='/products'>All Proudcts</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='navBarOption' as={Link} to='/login'>My Profile</Nav.Link>
                            <Nav.Link className='navBarOption' as={Link} to='/login'>Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className='profileCartDiv'>
                        <Dropdown>
                            <Dropdown.Toggle className='userDropdown'>
                                <BsFillPersonFill className='profileIconAndCart' />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <NavDropdown.Item className='dropDownNavOption' as={Link} to='/login'>Login</NavDropdown.Item>
                                <NavDropdown.Item className='dropDownNavOption' as={Link} to='/signUp'>Sign Up</NavDropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link as={Link} to='/myCart'>
                            <BsCart2 className='profileIconAndCart' />
                        </Nav.Link>
                        <Nav.Link as={Link} to='/likedProducts'>
                            <FaHeart className='profileIconAndCart' id='heartIcon' />
                        </Nav.Link>
                    </div>
                </Container>
            </Navbar>
            <Form className="d-flex serachDiv">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    className='searchBar'
                />
                <button className='btns'>Search</button>
            </Form>

        </div>
    );
}

export default NavbarComp;
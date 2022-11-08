import { Form, NavDropdown, Nav, Container, Navbar, Dropdown } from 'react-bootstrap';
import whiteLogo from './whiteLogo.png'; // with import
import { BsFillPersonFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import "./Navbar.css";
import { getCookie, logOut } from '../../DAL/serverFunctions';
import Cart from '../Cart/Cart';

function NavbarComp() {

    const [userLogged, setUserLogged] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        async function checkCookie() {
            setUserLogged(await getCookie())
        }
        checkCookie()
    }, [])

    async function logOutUser() {
        if (await logOut()) {
            navigate('/products')
            window.location.reload();
        }
    }

    return (
        <div>
            <Navbar className='navbar1' collapseOnSelect expand="md" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/products'><img className='siteLogo' src={whiteLogo} alt='hero'></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='navBarOption' as={Link} to='/products'>Home</Nav.Link>
                            <Nav.Link className='navBarOption' as={Link} to='/about'>About Us</Nav.Link>
                            <NavDropdown className='navBarOption' title="Products" id="collasible-nav-dropdown">
                                <NavDropdown.Item className='dropDownNavOption' as={Link} to='/products/category/AllClothes'>Clothes</NavDropdown.Item>
                                <NavDropdown.Item className='dropDownNavOption' as={Link} to='/products/category/Comics'>Comics</NavDropdown.Item>
                                <NavDropdown.Item className='dropDownNavOption' as={Link} to='/products/category/AllFigures'>Figures</NavDropdown.Item>
                                <NavDropdown.Item className='dropDownNavOption' as={Link} to='/products'>All Proudcts</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='navBarOption' as={Link} to='/orders'>My Profile</Nav.Link>
                            <Nav.Link className='navBarOption' as={Link} to='/contactUs'>Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className='profileCartDiv'>
                        <Dropdown>
                            <Dropdown.Toggle className='userDropdown'>
                                <BsFillPersonFill className='profileIconAndCart' />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {userLogged ?
                                    <div>
                                        <NavDropdown.Item className='dropDownNavOption username' onClick={logOutUser}>Hello {userLogged.name}!</NavDropdown.Item>
                                        <NavDropdown.Item className='dropDownNavOption' onClick={logOutUser}>Log Out</NavDropdown.Item>
                                    </div>
                                    : <div>
                                        <NavDropdown.Item className='dropDownNavOption' as={Link} to='/login'>Login</NavDropdown.Item>
                                        <NavDropdown.Item className='dropDownNavOption' as={Link} to='/signUp'>Sign Up</NavDropdown.Item>
                                    </div>}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link>
                            <Cart></Cart>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/product2'>
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
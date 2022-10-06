import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavbarExample = () => {
    const {
        isEmpty,
        totalItems,
    } = useCart();

    return (
        <div>
                <Navbar bg="light" variant="light" sticky="top" expand="lg" className="navbar navbar-fixed-top">
                    <div className="container">
                    <Navbar.Brand className="navbar-brand d-flex justify-content-center text-center ms-4 fw-bold "><img src="/assets/logo.png" width="40px" height="40px" className="mx-1"/>G-FIVE SHOP</Navbar.Brand>
                    <Navbar.Toggle className="mx-2" />

                    
                        <Container className="d-flex justify-content-center text-center collapse navbar-collapse" id="navbarSupportedContent">
                        <Navbar.Collapse>
                            <Nav className=" text-center mx-auto navbar-nav mx-auto mb-0 mb-lg-0">
                                <Nav.Link className="nav-item"><Link className="nav-link" to="/">HOME</Link></Nav.Link>
                                <Nav.Link className="nav-item"><Link className="nav-link" to="/product">PRODUCT</Link></Nav.Link>
                                <Nav.Link className="nav-item"><Link className="nav-link" to="/about">ABOUT</Link></Nav.Link>
                                <Nav.Link className="nav-item"><Link className="nav-link" to="/contact">CONTACT</Link></Nav.Link>
                                
                            </Nav>
                            <Nav className="d-flex justify-content-center text-center">
                                <div className="button d-flex justify-content-center">
                                <Link to="/cart" className="btn btn-outline-dark nav-item">
                                    <i className="fa fa-shopping-cart me-1">
                                        {!isEmpty && <span style={{ position: 'relative', left: '-21px', top: '-18px' }}>{totalItems}</span>}
                                        <span style={{ marginLeft: !isEmpty ? '-13px' : 0 }}>CART</span>
                                    </i></Link>

                                <Link to="/register" className="btn btn-outline-dark ms-2 nav-link">
                                    <i className="fa fa-user-plus me-1"></i>REGISTER</Link>
                                <Link to="/login" className="btn btn-outline-dark ms-2 nav-item">
                                    <i className="fa fa-sign-in me-1"></i>LOGIN</Link>
                                </div>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    
                    </div>
                </Navbar>
        </div>
    )
}

export default NavbarExample;

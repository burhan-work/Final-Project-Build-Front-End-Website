import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";

const Navbar = () => {
    const {
        isEmpty,
        totalItems,
    } = useCart();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <h3 className="navbar-brand fw-bold fs-4">G-FIVE SHOP</h3>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/product">
                                    Product
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <div className="buttons">
                            <Link to="/cart" className="btn btn-outline-dark">
                                <i className="fa fa-shopping-cart me-1">
                                    {!isEmpty && <span style={{ position: 'relative', left: '-21px', top: '-18px' }}>{totalItems}</span>}
                                    <span style={{ marginLeft: !isEmpty ? '-13px' : 0 }}>Cart</span>
                                </i></Link>
                            
                            <Link to="/register" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-1"></i>Register</Link>      
                            <Link to="/login" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-sign-in me-1"></i>Login</Link>                      
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Register from '../pages/Register'

function Login(props) {
    return (
        <div>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3 bg=info">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: 15 }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">
                                        Sign In
                                    </h2>
                                    <form>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="email"
                                                id="form3Example3cg"
                                                className="form-control form-control-lg"
                                            />
                                            <label className="form-label" htmlFor="form3Example3cg">
                                                Your Email
                                            </label>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="password"
                                                id="form3Example4cg"
                                                className="form-control form-control-lg"
                                                required='Type Something'
                                            />
                                            <label className="form-label" htmlFor="form3Example4cg">
                                                Password
                                            </label>
                                        </div>

                                        <div className="form-check d-flex justify-content-center mb-5">
                                            <input
                                                className="form-check-input me-2"
                                                type="checkbox"
                                                defaultValue=""
                                                id="form2Example3cg"
                                                required="Type Something"
                                            />
                                            <label className="form-check-label" htmlFor="form2Example3g">
                                                I agree all statements in{" "}
                                                <a href="#!" className="text-body">
                                                    <u>Terms of service</u>
                                                </a>
                                            </label>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button
                                                type="button"
                                                className="btn btn-info btn-block btn-lg gradient-custom-4 text-body" href='/Home'
                                            >
                                                Login
                                            </button>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                                <p className="lead fw-normal mb-0 me-3 mt-4">Sign in with</p>
                                                <button type="button" className="btn btn-primary btn-floating mx-1 mt-4">
                                                    <i className="fab fa-facebook-f"></i>
                                                </button>

                                                <button type="button" className="btn btn-primary btn-floating mx-1 mt-4">
                                                    <i className="fab fa-twitter"></i>
                                                </button>

                                                <button type="button" className="btn btn-primary btn-floating mx-1 mt-4">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </button>
                                            </div>
                                        <p className="text-center text-muted mt-5 mb-0">
                                            Don`t Have Any Account?{" "}
                                            <Link to="/Register" className="fw-bold text-body">
                                                <u>Sign Up Here</u>
                                            </Link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path='/Register' element={<Register />} />
            </Routes>
        </div>
    );
}

export default Login;
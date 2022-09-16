import React from 'react';
import { Link, } from 'react-router-dom'


function Register(props) {
    return (
        <div>
            <section className="vh-100 bg-success">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" style={{ borderRadius : 16}}>
                                <div className="card-body p-4 text-center">

                                    <h3 className="mb-5">SIGN UP</h3>

                                    <div className="form-outline mb-4">
                                        <input type="username" id="typeUserNameX-2" className="form-control form-control-lg" />
                                        <label className="form-label" for="typeUserNameX-2">UserName</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
                                        <label className="form-label" for="typeEmailX-2">Email</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
                                        <label className="form-label" for="typePasswordX-2">Password</label>
                                    </div>

                                    <button className="btn btn-primary btn-lg btn-block" type="submit">SIGN UP</button>

                                    <hr className="my-4" />

                                    <p>Allready have an account?</p>
                                    <Link to="/Register">Register here</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;
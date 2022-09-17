import React, { Component} from 'react';
import { Link, } from 'react-router-dom';


class Register extends Component {
    state = {
        username: '',
        email: '',
        password: ''
    }

    handleOnChange = (event) => {
        const { value, name } = event.target
        this.setState({ [name]: value })
    }
    handleFormOnSubmit = (event) => {
        event.preventDefault()
        const {email, password} = this.state
        localStorage.setItem('form', JSON.stringify(this.state))
        console.log({email, password})
    }
    render () {
    return (
        <div>
            <form onSubmit={this.handleFormOnSubmit}>
            <section className="vh-100 bg-success">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" style={{ borderRadius : 16}}>
                                <div className="card-body p-4 text-center">

                                    <h3 className="mb-5">SIGN UP</h3>

                                    <div className="form-outline mb-4">
                                        <input type="username" id="typeUserNameX-2" name='username' className="form-control form-control-lg" required='Input Name' placeholder='Username'
                                        value={this.state.username}
                                        onChange={this.handleOnChange}
                                        />
                                        <label className="form-label" for="typeUserNameX-2">UserName</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="email" id="typeEmailX-2" name='email' className="form-control form-control-lg" required='Input Name' placeholder='example@gmail.com'
                                        value={this.state.email}
                                        onChange={this.handleOnChange}
                                        />
                                        <label className="form-label" for="typeEmailX-2">Email</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="typePasswordX-2" name='password' className="form-control form-control-lg" required='Input Name' placeholder='Password'
                                        value={this.state.password}
                                        onChange={this.handleOnChange}
                                        />
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
            </form>
        </div>
    );
    }
}

export default Register;

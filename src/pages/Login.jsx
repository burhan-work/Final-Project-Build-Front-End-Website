import React, { Component } from 'react';
import { Link, } from 'react-router-dom';


class Login extends Component {
        state = {
            field: {
                email: '',
                password: ''
            },
            errors: {
                email: '',
                password: ''
            }
        }

        handleOnValidate = (name, value) => {
            if (!value) {
                return ' Please input field'
            }

            if (name === 'email' && !value.includes('@')) {
                return 'Email is not valid'
            }

            if (name === 'password' && value.length < 8) {
                return 'Password is too short'
            }

            return false
        }

        handleOnChange = (event) => {
            const { field, errors } = this.state
            const { value, name } = event.target
            const error = this.handleOnValidate(name, value)
            this.setState({
                field: {
                    ...field,
                    [name]: value
                },
                errors: {
                    ...errors,
                    [name]: error
                }
            })

        }

        handleFormOnSubmitValidation = () => {
            const { field } = this.state
            const names = Object.keys(field)
            const errors = {}
            names.forEach((name) => {
                const value = field[name]
                const error = this.handleOnValidate(name, value)
                errors[name] = error
            })

            return errors
        }

        handleFormOnSubmit = (event) => {
            event.preventDefault()
            const validation = this.handleFormOnSubmitValidation()
            const hasError = Object.values(validation).some((item) => item !== false)
            if ( hasError ) {
                this.setState({ errors: validation })
                return 
            }
            const { field } = this.state
            console.log(validation, field)
        }
        render() {
            const { field, errors } = this.state
            return (
                <div>
                    <form onSubmit={this.handleFormOnSubmit} >
                        <section className="vh-100 bg-success">
                            <div className="container py-5 h-100">
                                <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                        <div className="card shadow-2-strong" style={{ borderRadius: 16 }}>
                                            <div className="card-body p-5 text-center">

                                                <h3 className="mb-5">SIGN IN</h3>

                                                <div className="form-outline mb-4">
                                                    <input type="email" id="typeEmailX-2" name="email" className="form-control form-control-lg"
                                                        value={field.email}
                                                        onChange={this.handleOnChange}
                                                    />
                                                    <p>{errors.email}</p>
                                                    <label className="form-label" for="typeEmailX-2 ">Email</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="typePasswordX-2" name="password" className="form-control form-control-lg"
                                                        value={field.password}
                                                        onChange={this.handleOnChange}
                                                    />
                                                    <p>{errors.password}</p>
                                                    <label className="form-label" for="typePasswordX-2">Password</label>
                                                </div>

                                                {/* Checkbox */}
                                                <div className="form-check d-flex justify-content-start mb-4">
                                                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                                                    <label className="form-check-label" for="form1Example3"> Remember password </label>
                                                </div>

                                                <button className="btn btn-primary btn-lg btn-block" type="submit">LOGIN</button>

                                                <hr className="my-4" />

                                                <p>Don't have an account?</p>
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


export default Login;

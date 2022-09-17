import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [passwordRemember, setPasswordRemember] = useState('');
    
    const navigate = useNavigate();

    const handleEmailChange=(e)=>{
       
        setEmailError('');
        setEmail(e.target.value);
    }

    const handlePasswordChange=(e)=>{
        
        setPasswordError('');
        setPassword(e.target.value);
    }

    const handlePassworRememberdChange=(e)=>{

        setPasswordRemember(e.target.value);
    }

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        
        if(email!==''){
            const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(emailRegex.test(email)){
                toast.success('Welcome To Our Market', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });

                    navigate('/')
                    
                localStorage.setItem('email', email)
                localStorage.setItem('password', password)
            }
            else{
                setEmailError('Invalid Email')
            }
        }
        else{
            setEmailError('Email is Required');
        }

        if(password!==''){

        }
        else{
            setPasswordError('Password Required');
        }
    }

  return (
    <div>
        <form onSubmit={handleFormSubmit} >
                <section className="vh-100 bg-success">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card shadow-2-strong" style={{ borderRadius: 16 }}>
                                    <div className="card-body p-5 text-center">

                                        <h3 className="mb-5">SIGN IN</h3>


                                        <div className="form-outline mb-4">
                                            <input type="email" id="typeEmailX-2" name="email" className="form-control form-control-lg"
                                                value={email}
                                                onChange={handleEmailChange}
                                            />
                                            {emailError&&<p style={{ color : "red"}}>{emailError}</p>}
                                            <label className="form-label" for="typeEmailX-2 ">Email</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="password" id="typePasswordX-2" name="password" className="form-control form-control-lg"
                                                value={password}
                                                onChange={handlePasswordChange}
                                            />
                                            {passwordError&&<p style={{ color : "red"}}>{passwordError}</p>}
                                            <label className="form-label" for="typePasswordX-2">Password</label>
                                        </div>

                                        {/* Checkbox */}
                                        <div className="form-check d-flex justify-content-start mb-4">
                                            <input className="form-check-input" type="checkbox" id="form1Example3" 
                                            value={passwordRemember}
                                            onChange={handlePassworRememberdChange}
                                            />
                                            <label className="form-check-label" for="form1Example3"> Remember password </label>
                                        </div>

                                        <button className="btn btn-primary btn-lg btn-block" type="submit" >LOGIN</button>

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
  )
}

export default Login;
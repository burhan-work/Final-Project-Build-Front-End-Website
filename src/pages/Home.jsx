import React from 'react'
import { useNavigate } from 'react-router-dom';
import Product from "./Product";

const Home = () => {
    const navigate = useNavigate('');

    const handleOnClick = (e) => {
        e.preventDefault();
        navigate('/Product')
    }

    return (
        <div className='hero'>
            <div className="card text-bg-dark text-white border-0 ">
                <img src="/assets/bg.jpeg" className="card-img" alt="Backgorund" height="600px"/>
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0" style={{color: "black"}}>NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2" style={{color: "black"}}>
                            CHECK OUT ALL THE TRENDS
                        </p>
                        <button type="button" className="btn btn-secondary" onClick={handleOnClick}>Buy Now</button>
                        </div>
                    </div>
            </div>
            <Product />
        </div>
    )
}

export default Home;
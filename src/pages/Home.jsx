import React from 'react'
import Product from "./Product";

const Home = () => {
    return (
        <div className='hero'>
            <div className="card text-bg-dark">
                <img src="/assets/bg.jpeg" className="card-img" alt="Backgorund"/>
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0" style={{color: "black"}}>NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2" style={{color: "black"}}>
                            CHECK OUT ALL THE TRENDS
                        </p>
                        <p className="card-text"><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
            </div>
            <Product />
        </div>
    )
}

export default Home;
import React from "react";
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate('');

    const handleOnClick = (e) => {
        e.preventDefault();
        navigate('/Contact')
    }
    return (
        <div>
            <div className="container my-5">
                <h1 className="text-dark fw-bold mb-4">About Us</h1>
                <div className="row">
                    <div className="col text-center">
                        <p className="lead mb-4">G-FIVE SHOP merupakan sebuah platform yang disesuaikan untuk tiap wilayah dan menyediakan pengalaman berbelanja online yang mudah, aman, dan cepat bagi pelanggan melalui dukungan pembayaran dan logistik yang kuat. Kami percaya bahwa kegiatan belanja online harus terjangkau, mudah, dan menyenangkan.</p>
                        <button type="button" class="btn btn-secondary" onClick={handleOnClick}>Contact Us</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;




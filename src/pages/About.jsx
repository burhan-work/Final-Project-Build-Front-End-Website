import React from "react";
import { NavLink } from "react-router-dom";



const About = () => {
    return (
        <div>
            <div className="container my-5">
                <h1 className="text-danger fw-bold mb-4">Tentang Kami</h1>
                <div className="row">
                    <div className="col-md-6">
                        <p className="lead mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, dignissimos magnam consectetur quasi sit facere necessitatibus cumque nam similique, suscipit dolores quas veritatis accusantium incidunt nostrum eligendi assumenda iusto eius.</p>
                        <NavLink to="#" className="#">
                            Kontak Kami
                        </NavLink>
                    </div>
                    {/* <div className="col-md-6 d-flex justify-content-center"> */}
                    <div className="col-md-6">
                        {/* <img src="/assets/images/oreo.png" alt="About Us" height="400px" width="400px" /> */}
                        <div class="map-responsive">
                            <iframe title="Store Maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13276429.237327322!2d139.706698!3d35.669227!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3b040a4398e8539d!2sSupreme%20Harajuku!5e0!3m2!1sid!2sid!4v1641538297358!5m2!1sid!2sid" width={"500"} height={"350"} style={{ border: "0" }} allowfullscreen={""} loading={"lazy"} />
                        </div>
                        <ul>
                            <li class="address">4 Chome-32-7 Jingumae, Shibuya City, Tokyo 150-0001, Jepang</li>
                            <li class="telepon">+628123456789</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

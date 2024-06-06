import React from 'react'
import './footer.css'
import assets from '../../assets/assets'
export const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quisquam quasi voluptates minus placeat molestias natus nostrum ullam, est incidunt. Ex, temporibus.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-right">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About US</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-center">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-525-579-9821</li>
                        <li>mail@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright 2024 Tomato.com - All Right Reserved.</p>
        </div>
    )
}

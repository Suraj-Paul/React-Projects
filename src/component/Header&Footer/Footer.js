import React from 'react';
import './Footer.css';
// import { Button } from '@material-ui/core';
// import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (
        <div>
            <div class="footer">
                <div class="footComponent1">
                    <div className="footer__aboutus">
                        <h5>About us</h5>
                    </div>
                    <div className="footer__contact">
                        <h5>Contact</h5>
                    </div>
                    <div className="footer__feedback">
                        <h5>feedback</h5>
                        <p>Hey please give some feed back redgarding the product</p>
                    </div>
                </div>
                <div class="footComponent2">
                    <div className = "footer2">
                        <p>Privacy</p>
                        <p>Terms & conditions</p>
                        <p>Security</p>
                    </div>
                    <h4 style={{ color: "antiquewhite", fontSize: "18px" }}> © 2020 Copyright :<span class="developer">Eduamto</span></h4>
                    
                </div>
            </div>   
        </div>
    )
}

export default Footer;

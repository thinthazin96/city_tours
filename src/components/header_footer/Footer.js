import React from "react";
import './Footer.scss'

import {FaTwitterSquare,
        FaFacebookSquare,
        FaInstagramSquare,
        FaYoutubeSquare } from 'react-icons/fa'


const Footer = () => {
    let iconStyles = {color: "white", height:"50px", width: "50px" } ; //Used to manage icons css
    return(
        <div className="main-footer">
            <div className="container-footer">
                <div className="row-footer">
                    {/* Column 1 */}
                    <div className="col1">
                        <video width="350" height="250" controls>
                            <source src="vid.mp4" type="video/mp4"></source>
                        </video>
                        <p id="footer-p">This is a cute cat video to help you after reading all the scary locations in America. 
                            Enjoy the treat.</p>
                    </div>
                    {/* Column 2 */}
                    <div className="col2">
                        <div className="row-footer">
                            <ul className="ulstuff">
                                <a href="#/" className="astuff">
                                    <FaTwitterSquare style={iconStyles}/>
                                </a>
                                <a href="#/" className="astuff">
                                    <FaFacebookSquare style={iconStyles}/>
                                </a>
                                <a href="#/" className="astuff">
                                    <FaInstagramSquare style={iconStyles}/>
                                </a>
                                <a href="#/" className="astuff">
                                    <FaYoutubeSquare style={iconStyles}/>
                                </a>
                            </ul>
                            <h5 id="copyright">© HAUNTED AMERICA. All rights reserved</h5>
                        </div>
                    </div>
                    {/* Column 3 */}
                
                    <div className="col3">
                        <input type="email" placeholder="Email Address" className="footer-input"></input> 
                        <button type="submit" value="submit" class="footer-button">Submit</button>
                        <br></br>
                        <br></br>
                        <textarea id="message" placeholder="Enter your message"></textarea>
                        
                    </div>
                </div>

                

            </div>
        </div>
    );
}

export default Footer;
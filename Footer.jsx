import React from "react";
import { BackTop } from "antd";

export const Footer = () => {
    return (
        <div id="footer"  className= "footer">

            <div className="footer-top">
                <div className=" container">
                    
                      <div className="row-col">
                        
                        <div className="footer-info">
                            <div className="box-info" >
                                <h2>Finabits</h2>
                                <p> 74 Shelton Street, Covent Garden, London
                                    
                                    "United Kingdom, WC2H 9JQ"
                                    
                                    
                                </p>
                            </div>
                        </div>

                        <div className="footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                <i className="fa-solid fa-chevron-right"></i>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                <i className="fa-solid fa-chevron-right"></i>
                                    <a href="#">About Us</a>
                                </li>
                            </ul>
                        </div>


                        <div className="footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                <i className="fa-solid fa-chevron-right"></i>
                                    <a href="#">Services</a>
                                </li>
                                <li>
                                <i className="fa-solid fa-chevron-right"></i>
                                    <a href="#">Terms & services</a>
                                </li>
                            </ul>
                        </div>


                        <div className="footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <i className="fa-solid fa-chevron-right"></i>
                                    <a href="#">Infrastructure</a>
                                </li>
                                <li>
                                <i className="fa-solid fa-chevron-right"></i>
                                    <a href="#">Privacy policy</a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>

              <div className="container">
              

              
                  <div className="copyright">
                    "@ Copyright"
                    <strong>Finabits</strong>
                    ".All Right Reserved"
                     </div>
                    <div className="credits">
                    "Designed by"
                    <a href="https://bootsstrapmade.com/">Finabits</a>
                </div>
                
                {/* <ul className="socials">
              <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
            </ul> */}
                <BackTop>
              <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
            </BackTop>
            </div>

       </div>
    )
}
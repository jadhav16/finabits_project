import React from "react";


export const Header = () => {
    return (

        <div className="header-section">
            <div className="container-fluid">
                <a href="" className="site-logo">
                    <img src="img/logo.jpg" alt style={{width:100, height:100}}></img>
                </a>

                
                <a href class="site-btn">Sign Up Free</a>

                <nav className="main-menu">
                    <ul className="menu-list">

                        <li>
                            <a href="#hero">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#faq">Faq</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
             </div>
        </div>

    )
}
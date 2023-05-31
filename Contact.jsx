import React from "react";


export const Contact =()=>
{
    return(
        <div id="contact" className="contact gradient-bg">
            <div className="container">
        <div className="section-title">
           
            <h2>Contact</h2>
        </div>
        <div className="row">
            <div className="column">
                <div className="card" style={{width:350 ,height: 300 }} >
                <i className="fa-solid fa-location-dot"></i>
                    <h4>Head Office</h4>
                    <h3>74 Shelton Street, Covent Garden, London</h3>
                    <p>United Kingdom, WC2H 9JQ</p>
                 </div>
            </div>
            <div className="column">
                <div className="card" style={{width:350 ,height: 300 }}>
                <i className="fa-solid fa-location-dot"></i>
                 <h4> R & D</h4>

                 <h3>Vardhman palm Rose, Office No.-106</h3>
                 <p>Punawale , Pune -33</p>
                </div>
            </div>
            <div className="column">
                <div className="card" style={{width:350 ,height: 300 }}>
                <i className="fa-solid fa-location-dot"></i>
                    <h4>Email Us</h4>
                    <p>contact@finabit.in</p>
                </div>
            </div>
             </div>
        </div>
        </div>
    
    )
}
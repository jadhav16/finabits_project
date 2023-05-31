import React from 'react';


export const Hero =()=>{
    return(
        
         <div id="hero" className="hero">
        
         <div className="container">
            <div className="row">
                <div className="hero-text">
                 <h2>Invest in
                    <span>"Bitcon"</span>
                    
                    Bitcon Trading
                 </h2>

                 <h4>
                    Use modern progressive technologies of Bitcon to earn money</h4>
                    <form className="hero-subscribe-from">
                        <input type="text" placeholder="Enter your email"></input>
                          <button className="site-btn sb-gradient">Get Started</button>
                    </form>
                  </div>

                  <div className="col-md-6">
                    <img  src="img/laptop.png" alt="" className="laptop-image" style={{width:500, heigh:500}}></img>
                  </div>
         </div>
         </div>
         </div>
    )
}

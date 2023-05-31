import React from "react";


export const Fact=()=>
{
    return(
        <div className="fact-section gradient-bg">
            <div className="container">
                <div className="row1">

                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="fact">
                            <h2>60</h2>
                            <p>Support Countries </p>
                            
                            <i className=""></i>
                          </div>
                    </div>

                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="fact">
                            <h2>12K</h2>
                            <p>Transaction per hour
                            </p>
                            <i className="fa-solid fa-panel-ews"></i>
                          </div>
                    </div>

                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="fact">
                            <h2>5B</h2>
                            <p>Largest Transaction
                            </p>
                            <i className="ti-stats-up"></i>
                          </div>
                    </div>

                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="fact">
                            <h2>240</h2>
                            <p>Years of Experience
                            </p>
                            <i className="ti-user"></i>
                          </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
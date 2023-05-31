import React from "react";

export const About = () => {
    return (
        <div id="about" className="about">

            <div className="container">
                <div className="row">
                    <div className="about-text">
                        <h2>About Finabit CRM </h2>
                        <h5>Finabits CRM in an innovative product
                            designed to simplify the lives of forex
                            brokers and traders. our powerful platform
                            offers intuitive feature and tools to enhance
                            the trading experience , while providing valuable insight
                            and support to our clients.
                        </h5>
                        <ul>
                            <li><i className="fa-solid fa-circle-check"></i>
                                Efficiently manage your accounts with our robust platform</li>
                            <li>    <i class="fa-solid fa-circle-check"></i>
                                Get up and running with our speedy deployment process</li>
                            <li>     <i class="fa-solid fa-circle-check"></i>
                                Effortlessly manage your IB account with our intuitive platform</li>
                        </ul>
                        <p>
                            You can focus on trading, while we take care of the backend with our comprehensive Forex CRM solution
                        </p>


                    </div>
                </div>



                <div className="about-img">
                    <img src={"img/about-cloud-forex-crm.jpg"} alt="about" />
                </div>


             <div className="rows">

                <div className="col-md-4 process" >
                    <div className="process-step">
                        <span>1</span>
                        <h4>Innovation</h4>
                        <p>Run your business as you reinvent it
                             with software, solutions, and services
                            to help evolve to an Autonomous Digital 
                        </p>
                     </div>
                </div>

                <div className="col-md-4 process">
                    <div className="process-step">
                        <span>2</span>
                        <h4>Customer Success</h4>
                        <p>Delivering results through client-focused solutions 
                        </p>
                     </div>
                </div>

                <div className="col-md-4 process">
                    <div className="process-step">
                        <span>3</span>
                        <h4>Expertise</h4>
                        <p>With over two decades of expertise, we deliver exceptional results

                        </p>
                     </div>
                </div>


             </div>


         </div>

             </div>
            )
}

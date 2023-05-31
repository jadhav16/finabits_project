import React from "react";

import { Hero } from "./Hero";
import { About } from "./About";
import { Services } from "./Services"
import { Feature } from "./Feature";
import { Process } from "./Process";
import { Fact } from "./Fact";
import { Faq } from "./Faq";
import { Contact } from "./Contact";
export const   Index= () =>{
    return(
      <React.Fragment>
      <Hero/>
     <About/>
     <Services />
      <Feature />

      <Process/>
      <Fact />
      <Faq />
      < Contact/>
     

  </React.Fragment>
              
            )
 }
            
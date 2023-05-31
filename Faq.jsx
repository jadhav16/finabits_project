import React from "react";


import { Collapse } from 'antd';

const { Panel } = Collapse;

export const Faq =()=>
{
    return (
        <div id="faq" className=" faqblock">
      <div className="containers-fluids">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          <p>Efficiently productize reliable paradigms before ubiquitous models.
             Continually utilize frictionless expertise whereas tactical
             relationships. Still, have questions?</p>
        </div>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="Can the hosting be done on our Server ?" key="1" >
            <p> we respect the data privacy of the client’s data, we never host any database on our server, it's
         always hosted on the client’s server but as the core application has our proprietary rights we host it on our server. So ideally we never share the source code.
           </p>
           
          </Panel>
          <Panel header="How am i bound for the CRM contract?" key="2">
            <p>The minimum tenure to continue the CRM subscription is 3 months, which is the first 3 months as we accept payments only Quarterly basis. 
                If you want to discontinue after 3 months, you need to inform us at least before two weeks of the expiration of the first quarter.</p>
          </Panel>
          <Panel header="Do i need to sign an NDA?" key="3">
            <p>We get one documents signed which is called EULA, this document protects the rights and obligations of both the parties.</p>


          </Panel>
          <Panel header="How can we be eligible forany future updates?" key="4">
            <p>As our company is continuously working on new updates, any new feature included in the product will be given at no extra cost.</p>


          </Panel>
          <Panel header="In how many days i can start using Cloud Forex CRM & Trader's Room?" key="5">
            <p>We have a prerequisite list of different components needed to integrate the CRM with your Trading Platform & Website, 
                once we have all this information in place it takes about 5 working days to integrate the system.</p>


          </Panel>
          <Panel header="Can i get more than one language for CRM and Trader's Room?" key="6">
            <p>Currently, we already have 5 languages integrated apart from English, if you need any other languages to be integrated,
                 we will get it done for you with no extra cost, provided you give us the translation.</p>
          </Panel>
        </Collapse>
        
      </div>
    </div>  
  );
}


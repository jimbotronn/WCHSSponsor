import React, { useState } from "react";
import Modal from "react-modal";
import Reveal from "react-reveal/Reveal";
import Iframe from "react-iframe"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Map from "../Map";
import Contact from "../Contact";
import Social from "../Social";

Modal.setAppElement("#root");

const SkillsTwo = () => {

  const [isOpen, setIsOpen] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="shane_tm_section shane_tm_section_donate" id="donate">
        
        <div className="shane_tm_about">
        
        <div className="container donation_container">
        <div className="shane_tm_title donation_right">
                <div className="title_flex title_campaign">
                  <div className="right dl_right">
                    <span>About This Campaign</span>
                    <p>
                         We set up everything through Givebutter, a non-profit fundraising platform.  
                         All transactions are secured and processed through Givebutter's partnership 
                         with Stripe.</p><br></br><p>
                         As always, your donations are tax deductible.  Upon completing the donation 
                         transaction, you will receive an automatic receipt. </p><br></br>
                         <br></br><p>Feel free to contact us if you have any questions or run into any issues</p><br></br>   
                         <a href="mailto:warhawksmvb@gmail.com" className="white-fill-bg btn-outline btn-medium" >
                         Contact Us
                    </a>
                                       
                </div>
                </div>
              </div>
                   <div className="portfolio_filter donation_left">
                  <div className="portfolio_list left dl_left">
                    <br></br>
                  <p className="importanttext1">* On the payment page, <span className="importanttext"><b>tips for Givebutter is optional.</b></span>  By displaying the message, Givebutter allows us to utilize its services free of charge. 
                  You may change the amount to <b>Others</b> then enter <b>$0</b> before completing the transaction. </p><br></br>
                      <Reveal effect="fadeInLeft">
                        <Iframe url="https://givebutter.com/embed/c/wcvolleyballsponsor"
                          width="100%"
                          height="615px"
                          style="max-width: 601px;"
                          name="givebutter" 
                          frameborder="0"
                          scrolling="no"
                          id="myId"
                          className="myClassname"
                          display="initial"
                          seamless allowpaymentrequest
                         />
                      </Reveal>

                     
                  
               
                  </div>
       
              </div>
 
          </div>
          {/* End .conainer */}
        </div>
      </div>
    </>
  );
};

export default SkillsTwo;

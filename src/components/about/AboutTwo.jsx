import React from "react";
import Reveal from "react-reveal/Reveal";
import Iframe from "react-iframe"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaVolleyballBall, FaRoute } from  "react-icons/fa";
import { HashLink } from 'react-router-hash-link';

const About = () => {
  return (
    <>
      <div className="shane_tm_section shane_tm_section_about shane_tm_section_sponsor" id="instruction">
        <div className="shane_tm_about2">
          <div className="container">
            <div className="positon-relative">
             <div className="shane_tm_title">
                <div className="title_flex">
                  <div className="left aboutustext">
                    <span>How It Works</span>
                  </div>
                </div>
                <div class="mcc_section">
                  <div className="text mission invest">
                  <div class="sponsoricon"><img src="./img/about/Payment.png" alt="donationicon"/><h3>Invest & Grow with Us </h3></div>
                                      <p class="sponsortagline">
                        Make a donation of $150 to support our team.  </p><p class="sponsorbody">Becoming a team sponsor is an excellent opportunity for advertisement.
                        It shows the community that your business is willing to invest in kids.</p><p class="sponsorbutton">
                        <HashLink className="white-fill-bg btn-outline btn-medium btn-gap" smooth to="/#donate">
Become Our Sponsor Today           
</HashLink></p>
                   </div>
                   <div className="text challenge"><p>
                        <ul>
                          <li><b><p className="highlighttext">Sponsor Hub</p></b><p class="sponsorbody">A dedicated page to recognize our sponsors. It will be available from 2/1/22 - 5/31/22.  
                          We will actively promote it to students and families of the school. We will notify you when the page goes live.</p></li>
                          <li><b><p className="highlighttext">Home Game Tickets</p></b><p class="sponsorbody">We will display logos of our sponsors on our ticket page and promote Sponsor Hub to the purchasers.</p> </li>
                          <li><b><p className="highlighttext">Practice Shirts</p></b><p class="sponsorbody">Our players will receive practice shirts with logos of our sponsors on the back of the shirts. </p></li>
                        </ul> 
                        <br></br><br></br>
                        </p>  
                      
                   </div>
                  
                </div>
              </div>
             
            </div>
          </div>
          </div>
          {/* End container */}
      </div>
     
    </>
  );
};

export default About;

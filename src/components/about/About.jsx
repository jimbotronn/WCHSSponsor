import React from "react";
import Reveal from "react-reveal/Reveal";
import Iframe from "react-iframe"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaVolleyballBall, FaRoute } from  "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="shane_tm_section shane_tm_section_about" id="about">
        <div className="shane_tm_about2">
          <div className="container">
            <div className="positon-relative">
             <div className="shane_tm_title">
                <div className="title_flex">
                  <div className="left aboutustext">
                    <span>About Us</span>
                  </div>
                </div>
                <div class="mcc_section">
                  <div className="text mission">
                  <h3><FaVolleyballBall/> What We Do </h3>
                        <p>
                        Westerville Central Boys Volleyball program provides the opportunity  for 
                        high school boys to discover their potential through volleyball.  The program guides  
                        them to excel in teamwork, sportsmanship, self-discipline, and moral character. <br></br><br></br>
                        For some, competitive volleyball has created new opportunities to pursue higher education.     
 
                        </p>
                   </div>
                   <div className="text challenge">
                   <h3><FaRoute/>Challenges </h3>
                        <p>
                        Boys Volleyball is a club sport in Westerville School District.  The school supports 
                        us by letting us use its equipment and facility for practices and competition.  The 
                        families of the players are responsible for funding 100% of the expenses.  <br></br><br></br>
                        Most recently, the team is expected to purchase and maintain its equipment. 
                        It is making an already challenging financial situation tougher.
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

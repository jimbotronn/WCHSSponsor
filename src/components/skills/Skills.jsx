import React, { useState } from "react";
import Modal from "react-modal";
import Reveal from "react-reveal/Reveal";
import Iframe from "react-iframe"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

Modal.setAppElement("#root");



const SkillsTwo = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);
	const [isOpen3, setIsOpen3] = useState(false);
  
	function toggleModalOne() {
	  setIsOpen(!isOpen);
	}
	function toggleModalTwo() {
	  setIsOpen2(!isOpen2);
	}
	function toggleModalThree() {
	  setIsOpen3(!isOpen3);
	}
  
  return (
    <>
      <div className="shane_tm_section" id="donate">
        <div className="shane_tm_about">
        <Modal
                    isOpen={isOpen2}
                    onRequestClose={toggleModalTwo}
                    contentLabel="My dialog"
                    className="custom-modal"
                    overlayClassName="custom-overlay"
                    closeTimeoutMS={500}
                  >
	<div id="generic_price_table">
		<section>
			<div class="container1">
				<div class="row">
					<div class="col-md-12">
			
						<div class="price-heading clearfix">
							<h1>Sponsorship Packages</h1>
						</div>
	
					</div>
				</div>
			</div>
			<div class="container2">

		
				<div class="row">
					<div class="col-md-4">

		
						<div class="generic_content clearfix">

					
							<div class="generic_head_price clearfix">

				
								<div class="generic_head_content clearfix">

						
									<div class="head_bg"></div>
									<div class="head">
										<span>Silver</span>
									</div>
				

								</div>
		
								<div class="generic_price_tag clearfix">
									<span class="price">
										<span class="sign">$</span>
										<span class="currency">250</span>
										<span class="cent">.00</span>
										<span class="month"></span>
									</span>
								</div>
				

							</div>
		
							<div class="generic_feature_list">
								<ul>
									<li><span>Logo Recognition</span> </li>
									<li><span>on Athletic Website Team Page</span></li>
									<li><span>on Home Game Ticketing Page</span></li>
									<li><span>on Practice Shirts</span></li>

								</ul>
							</div>
					
						</div>
					</div>

					<div class="col-md-4">

						<div class="generic_content active clearfix">

						
							<div class="generic_head_price clearfix">

						
								<div class="generic_head_content clearfix">

						
									<div class="head_bg"></div>
									<div class="head">
										<span>Platinum</span>
									</div>
					

								</div>
				
								<div class="generic_price_tag clearfix">
									<span class="price">
										<span class="sign">$</span>
										<span class="currency">500</span>
										<span class="cent">.00</span>
										<span class="month"></span>
									</span>
								</div>
						

							</div>
				

				
							<div class="generic_feature_list">
								<ul>
									
									<li><span>Logo Recognition</span> </li>
									<li><span>Display at Home Game Entrace</span> </li>
									<li><span>In Ticket Confirmation Email</span> </li>
									<li><span>+ Everything from Silver Package</span> </li>
									
								</ul>
							</div>
				



						</div>
	

					</div>
					<div class="col-md-4">

	
						<div class="generic_content clearfix">


							<div class="generic_head_price clearfix">

					
								<div class="generic_head_content clearfix">

					
									<div class="head_bg"></div>
									<div class="head">
										<span>Diamond</span>
									</div>
					

								</div>
			
								<div class="generic_price_tag clearfix">
									<span class="price">
										<span class="sign">$</span>
										<span class="currency">800</span>
										<span class="cent">.00</span>
										<span class="month"></span>
									</span>
								</div>
	

							</div>
			
							<div class="generic_feature_list">
								<ul>
									
									<li><span>Logo Recognition</span> </li>
									<li><span>Display at Score Table at Home Games</span> </li>
									<li><span>Display in Post-Match Highlight Videos</span></li>
									<li><span>+ Everything from Silver & Platinum</span> </li>	
								</ul>
							</div>
		

			

						</div>
							</div>
				</div>
			</div>
		</section>
	</div>
	</Modal>
        <div className="container donation_container">
        <div className="shane_tm_title donation_right">
                <div className="title_flex">
                  <div className="right dl_right">
                    <span>About This Campaign</span>
                    <p>         Your sponsorship will allow Westerville Central Boys Volleyball program
                         provide an energetic, healthy, and competitive team environment to continue
                         our growth and success for years to come, creating the opportunity for 
                         more student-athletes to discover their potential in boys volleyball  </p><br></br>
						 <h3 className="white-fill-bg btn-outline btn-medium" onClick={toggleModalTwo}>
                  Sponsor Package Details
                    </h3><br></br><br></br><br></br><br></br>
					<a href="mailto:warhawksmvb@gmail.com" className="white-fill-bg btn-outline btn-medium" >
                         Contact Us
                    </a>
                  </div>
                </div>
              </div>
                   <div className="portfolio_filter donation_left">
                  <div className="portfolio_list left dl_left">
              
                      <Reveal effect="fadeInLeft">
                        <Iframe url="https://givebutter.com/embed/c/wcvolleyballsponsor"
                          width="100%"
                          height="700px"
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

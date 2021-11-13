import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import Reveal from "react-reveal/Reveal";

const PortfolioTwo = () => {
  return (
    <div className="shane_tm_section shane_tm_section_mod" id="portfolio">
    <SimpleReactLightbox>
        <div className="shane_tm_portfolio shane_tm_portfolio_mod">
          <div className="container">
            <div className="positon-relative">
              {/* End shane_tm_title */}
              <div className="portfolio_filter">
                
                   <div className="portfolio_list portfolio_list_mod">
                    <SRLWrapper>
                    <div id='layout' class="layout layout--collage">
                                                <Reveal effect="fadeInUp">  
                              <div className="inner innersquare">
                                <div className="entry shane_tm_portfolio_animation_wrap">
                                  <a href="./img/portfolio/12.jpg">
                                    <img
                                      src="./img/portfolio/12.jpg"
                                      alt="2012 Season"
                                    />
                                  </a>
                                </div>
                        
                              </div>
                            </Reveal>
                         
                          {/* End single image block */}

                     
                          <Reveal effect="fadeInUp">  
                              <div className="inner innersquare">
                                <div className="entry shane_tm_portfolio_animation_wrap">
                                  <a href="./img/portfolio/33.jpg">
                                    <img
                                      src="./img/portfolio/33.jpg"
                                      alt="2016 Season"
                                    />
                                  </a>
                                </div>
      
                              </div>
                            </Reveal>
                       
                          {/* End single image block */}
                          </div>
                          <div id='layout' class="layout layout--collage">
                          <Reveal effect="fadeInUp">  
                              <div className="inner innersquare2">
                                <div className="entry shane_tm_portfolio_animation_wrap">
                                  <a href="./img/portfolio/1.jpg">
                                    <img
                                      src="./img/portfolio/1.jpg"
                                      alt="2014 Season"
                                    />
                                  </a>
                                </div>
            
                              </div>
                            </Reveal>
                         
                          {/* End single image block */}
                    
                          </div>
                      
                        {/* End portfolio list */}
                   
            
                        <div id='layout' class="layout layout--collage">
                        <Reveal effect="fadeInUp">  
                            <div className="inner innersquare3">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="./img/portfolio/13.jpg">
                                  <img
                                    src="./img/portfolio/13.jpg"
                                    alt="2017 Season"
                                  />
                                </a>
                              </div>
                
                            </div>
                            </Reveal>
               
                          {/* End single image block */}

                          <Reveal effect="fadeInUp">  
                            <div className="inner innersquare3">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="./img/portfolio/2.jpg">
                                  <img
                                    src="./img/portfolio/2.jpg"
                                    alt="2013 Season"
                                  />
                                </a>
                              </div>
      
                            </div>
                            </Reveal>

                            <Reveal effect="fadeInUp">  
                            <div className="inner innersquare3">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="./img/portfolio/14.jpg">
                                  <img
                                    src="./img/portfolio/14.jpg"
                                    alt="2017 Season"
                                  />
                                </a>
                              </div>
      
                            </div>
                            </Reveal>

  
                       
                          {/* End single image block */}
                
                        {/* End portfolio list */}
                        </div>

               
                 
                    </SRLWrapper>
                    {/* End tabpanel */}
                  </div>
                  {/* End list wrapper */}
              
              </div>
            </div>
          </div>
        </div>
      </SimpleReactLightbox>   
    </div>
  );
};

export default PortfolioTwo;

import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';



const Slider = () => {

  return (

    <div className="slider-four">
      <div className="shane_tm_hero shane_tm_slider_left" id="home" data-style="one">
        <div className="background">
          <div
            className="image"
            style={{
              background: `#2c2b31`,
            }}
          ></div>
        </div>
        {/* End .background */}

        <div className="container">
          <div className="content">
            <div className="name_wrap">
              <h3>
                <span>
                  INVEST IN<br></br>
                  OUR FUTURE
                  <br />
                </span>{" "}
                <span className="overlay_effect"></span>
              </h3>
            </div>
            {/* End title */}

            <div className="name_wrap2">
              <h2>            
                <span className="loop-text">
                Provide student-athlete the opportunity
                to discover their potential in boys volleyball
              </span></h2>

            </div>
            {/* End designation */} 
            <HashLink className="white-fill-bg btn-outline btn-medium " smooth to="/donate#about">
            Learn More
            <span className="overlay_effect"></span>
</HashLink>
<HashLink className="white-fill-bg btn-outline btn-medium btn-gap2" smooth to="/donate#donate">
            Sponsor Us
            <span className="overlay_effect"></span>
</HashLink>
            
            
          </div>
          {/* End content */}
        </div>
        {/* End .container */}
      </div>
    </div>
    
  );
};

export default Slider;

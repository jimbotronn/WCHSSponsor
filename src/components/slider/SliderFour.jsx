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
              background: `transparent`,
            }}
          ></div>
        </div>
        {/* End .background */}

        <div className="container">
          <div className="content">
            <div className="name_wrap">
              <h3>
                <span>
                  INVEST &<br></br>
                  GROW<br></br>
                  WITH US
                  <br />
                </span>{" "}
                <span className="overlay_effect"></span>
              </h3>
            </div>
            {/* End title */}

            <div className="name_wrap2">
              <h2>            
                <span className="loop-text">
                Become a sponsor of our team &
                grow your bussiness through our  <span className="highlighttext">sponsor hub</span>               
              </span></h2>

            </div>
            {/* End designation */} 
            <HashLink className="white-fill-bg btn-outline btn-medium " smooth to="/#about">
            More About Us
            <span className="overlay_effect"></span>
</HashLink>
<HashLink className="white-fill-bg btn-outline btn-medium btn-gap" smooth to="/#instruction">
            How It Works
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

import React from "react";
import Header from "../../components/header/Header2";
import Slider from "../../components/slider/SliderTwo";
import About from "../../components/about/About";
import Portfolio from "../../components/portfolio/PortfolioTwo";
import Skills from "../../components/skills/Skills";
import Brand from "../../components/Brand";
import Footer from "../../components/footer/Footer";
import Testimonial from "../../components/testimonial/TestimonialTwo";
import Reveal from "react-reveal/Reveal";



const HomeTwo = () => {
  return (
    <div className="home-four">

      <Header />
      {/* End Header Section */}
      <div className="shane_tm_section">
      <div className="shane_tm_about2">
        <div className="container">
        <div className="position-relative position-flex">
      <Slider />
      {/* End Slider Section */}

      <Portfolio />
      </div></div></div></div>

      <About />
      {/* End About Section */}
      <div className="shane_tm_section section_accent">
        <div className="shane_tm_partners">
          <div className="container">
            <div className="partners_inner">
              <Brand />
            </div>
          </div>
        </div>
      </div>

      <div className="shane_tm_section">
        <div className="shane_tm_testimonials">
          <div className="container">
            <div className="testimonials_inner">
              <Reveal effect="fadeInRight">
                <div className="left">
                  <div className="shane_tm_title">
                    <br></br>
                    <h3>Proud Supporters of Our Team</h3>
                  </div>
                </div>
              </Reveal>
              <Reveal effect="fadeInRight">
                <div className="right">
                  <Testimonial />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      <Skills />

      



      {/* End shane_tm_partners */}


      {/* End  shane_tm_testimonials*/}


      <Footer />
      {/* End Footer Section */}
    </div>
  );
};

export default HomeTwo;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <SimpleReactLightbox>
    <ul>
    <SRLWrapper>
      <Slider {...settings}>
  
      <li className="item">
        <a href="./img/portfolio/4.jpg">
          <img src="./img/portfolio/4.jpg" alt="2013 Season" />
          </a>
        </li>

        <li className="item">
        <a href="./img/portfolio/7.jpg">
          <img src="./img/portfolio/7.jpg" alt="2015 Season" />
          </a>
        </li>
        {/* End single brand */}

        <li className="item">
        <a href="./img/portfolio/3.jpg">
          <img src="./img/portfolio/3.jpg" alt="2014 Season" />
          </a>
        </li>
        {/* End single brand */}

        <li className="item">
        <a href="./img/portfolio/14.jpg">
          <img src="./img/portfolio/14.jpg" alt="2017 Season" />
          </a>
        </li>
        {/* End single brand */}


        <li className="item">
        <a href="./img/portfolio/44.jpg">
          <img src="./img/portfolio/44.jpg" alt="2018 Season" />
          </a>
        </li>
        {/* End single brand */}



        <li className="item">
        <a href="./img/portfolio/12.jpg">
          <img src="./img/portfolio/12.jpg" alt="2012 Season" />
          </a>
        </li>
        {/* End single brand */}


        <li className="item">
        <a href="./img/portfolio/13.jpg">
          <img src="./img/portfolio/13.jpg" alt="2017 Season" />
          </a>
        </li>
        {/* End single brand */}

        <li className="item">
        <a href="./img/portfolio/14.jpg">
          <img src="./img/portfolio/14.jpg" alt="2017 Season" />
          </a>
        </li>
        {/* End single brand */}




        <li className="item">
        <a href="./img/portfolio/2.jpg">
          <img src="./img/portfolio/2.jpg" alt="2013 Season" />
          </a>
        </li>

        {/* End single brand */}

        <li className="item">
        <a href="./img/portfolio/15.jpg">
          <img src="./img/portfolio/15.jpg" alt="2018 Season" />
          </a>
        </li>
        {/* End single brand */}

        <li className="item">
        <a href="./img/portfolio/16.jpg">
          <img src="./img/portfolio/16.jpg" alt="2019 Season" />
          </a>
        </li>
        {/* End single brand */}

        <li className="item">
        <a href="./img/portfolio/19.jpg">
          <img src="./img/portfolio/19.jpg" alt="2019 Season" />
          </a>
        </li>
        {/* End single brand */}

        <li className="item">
        <a href="./img/portfolio/20.jpg">
          <img src="./img/portfolio/20.jpg" alt="2020 Season" />
          </a>
        </li>
        {/* End single brand */}

        <li className="item">
        <a href="./img/portfolio/21.jpg">
          <img src="./img/portfolio/21.jpg" alt="2020 Season" />
          </a>
        </li>
        {/* End single brand */}


        <li className="item">
        <a href="./img/portfolio/22.jpg">
          <img src="./img/portfolio/22.jpg" alt="2021 Season" />
          </a>
        </li>
        {/* End single brand */}

        <li className="item">
        <a href="./img/portfolio/24.jpg">
          <img src="./img/portfolio/24.jpg" alt="2021 Season" />
          </a>
        </li>
        {/* End single brand */}

        <li className="item">
        <a href="./img/portfolio/31.jpg">
          <img src="./img/portfolio/31.jpg" alt="2018 Season" />
          </a>
        </li>
        {/* End single brand */}

        
        <li className="item">
        <a href="./img/portfolio/32.jpg">
          <img src="./img/portfolio/32.jpg" alt="2013 Season" />
          </a>
        </li>
        {/* End single brand */}

        <li className="item">
        <a href="./img/portfolio/33.jpg">
          <img src="./img/portfolio/33.jpg" alt="2016 Season" />
          </a>
        </li>
        {/* End single brand */}

        <li className="item">
        <a href="./img/portfolio/11.jpg">
          <img src="./img/portfolio/11.jpg" alt="2016 Season" />
          </a>
        </li>
        {/* End single brand */}

       
      </Slider>
      </SRLWrapper>
    </ul>
    </SimpleReactLightbox>   
  );
}

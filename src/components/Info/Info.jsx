import React from "react";

const Info = () => {
  const shoeName = (
    <div className="shoeName">
      <div>
        <h1 className="big">What is Sponsor Hub</h1>
      
      </div>
      <h3 className="small"></h3>
    </div>
  );

  const description = (
    <div className="description">
      <h3 className="title"></h3>
      <p className="text">
        We are creating a digital community sponsor hub to connect our business sponsors with our friends, families, and fans <br></br><br></br>
        Think of it as an <u>online farmer's market</u>.  We will help you setup your space, so you can leverage our digital resources to <b>increase brand exposure</b> and/or <b>provide limited time offers</b>.
      </p>
    </div>
  );

  const ColorContainer = (
    <div className="color-container">
      <h3 className="title">Color</h3>
      <div className="colors">
        <span className="color active" primary="#2175f5" color="blue"></span>
        <span className="color" primary="#f84848" color="red"></span>
        <span className="color" primary="#29b864" color="green"></span>
        <span className="color" primary="#ff5521" color="orange"></span>
        <span className="color" primary="#444" color="black"></span>
      </div>
    </div>
  );

  const SizeContainer = (
    <div className="size-container">
      <h3 className="title">size</h3>
      <div className="sizes">
        <span className="size">7</span>
        <span className="size">8</span>
        <span className="size active">9</span>
        <span className="size">10</span>
        <span className="size">11</span>
      </div>
    </div>
  );

  const BuySection = (
    <div className="buy-price">
      <a href="/#" className="buy">
        <i className="fas fa-shopping-cart"></i>View Offer Details
      </a>
      <div className="price">
        <i className="fas fa-dollar-sign"></i>
        <h1></h1>
      </div>
    </div>
  );

  return (
    <div className="info">
      {shoeName}
      {description}

    </div>
  );
};

export default Info;

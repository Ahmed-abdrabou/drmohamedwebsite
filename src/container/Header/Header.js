import React from "react";

import images from "../../constants/images";
import "./Header.css";

const Header = () => (
  <div className="Header app__container " id="Home">
    <div className="Header_text">
      <h1>
        Hi, I am <span>Dr Mohamed Soliman.</span>
      </h1>
      <p>
        As a medical doctor, I have known the face of adversity, So i just want
        you to work out, eat healthy, be patient, Bellieve me your body will
        reword you.
      </p>
      <span className="custom__button">Make Appointmant</span>
    </div>
    <div className="Header_img">
      <img src={images.bg2} alt="" />
    </div>
  </div>
);

export default Header;

import React from "react";
// import { Link } from "react-router-dom";
import { GiPhone } from "react-icons/gi";
import "./Navbar.css";
import images from "../../constants/images";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="logo">
        {/* <img src={images.logo_blue} alt="logo_blue" /> */}
        <img src={images.logo_red} alt="logo_red" />
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>

          <li>
            <a href="#About Me">About Me</a>
          </li>

          <li>
            <a href="#FindMe">Find Me</a>
          </li>
        </ul>
      </div>
      <div className="phones">
        <GiPhone color="var(--color-blue-light)" fontSize={27} />
        <p>Call Now</p>
        <div className="phoneNumber_contaoner">
          <h4>Ismailia</h4>
          <div className="phoneNumber">01028670030</div>
          <div className="phoneNumber">01203120250</div>
          <h4>Suze</h4>
          <div className="phoneNumber">01272308347</div>
          <div className="phoneNumber">01272308251</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

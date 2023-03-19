import React from "react";
// import { Link } from "react-router-dom";
import { FiFacebook } from "react-icons/gi";
import { FiInstagram } from "react-icons/gi";
import { GiMailbox } from "react-icons/gi";
import "./Footer.css";
import images from "../../constants/images";

const Footer = () => {
  return (
    <nav className="Footer">
      <div className="contact_info">
        <div className="location">
          <h3>Ismailia:</h3>
          <p>
            - bhay el afrang 21 aboubakr st above el zohor el gededa pharmacy -
            3rd floor(elevator)
          </p>
          <p>- tel: 01028670030 / 01203120250</p>
          <p>- From Monday To Thursday</p>
        </div>
        <div className="location">
          <h3>Suze:</h3>
          <p>
            - ahmed oraby street in front of el rahama institue - 4th
            floor(elevator)
          </p>
          <p>- tel: 01272308251 / 01272308347</p>
          <p>- From Saterday To Sunday</p>
        </div>
      </div>
      <form>
        <div className="input_container">
          <input
            type="text"
            name="name"
            placeholder="Write Your Name"
            required
          />
        </div>
        <div className="input_container">
          <input
            type="number"
            name="number"
            placeholder="Write Your Number"
            required
          />
        </div>
        <div className="input_container">
          <input type="text" name="Email" placeholder="Write Your Email" />
        </div>
        <textarea
          type="text"
          name="message"
          placeholder="Write Your Message"
          required
        />

        <span className="custom__button">Send Message</span>
      </form>
      <div className="social">
        <h3>Social Media</h3>
        <div className="social_ite">
          <GiMailbox style={{ color: "#ffd897", fontSize: "40px" }} />
          drMohamed@gmail.com
        </div>
        <div className="social_item">
          <GiMailbox
            style={{ color: "#ffd897", fontSize: "40px" }}
            onClick={() => {
              window.open(
                "https://www.facebook.com/mohamed.soliman.908132",
                "_blank"
              );
            }}
          />
          facebook
        </div>
        <div className="social_item">
          <GiMailbox style={{ color: "#ffd897", fontSize: "40px" }} />
          instagram
        </div>
      </div>
    </nav>
  );
};

export default Footer;

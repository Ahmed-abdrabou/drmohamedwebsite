import React from "react";
import { GiHospitalCross } from "react-icons/gi";
import { GiHospital } from "react-icons/gi";
import { GiBallHeart } from "react-icons/gi";

import images from "../../constants/images";
import "./AbouMe.css";

const AbouMe = () => (
  <div className="AbouMe app__container " id="About Me">
    <div className="AbouMe_text">
      <h2>About Me</h2>
      <p>
        Health care systems are organizations established to meet the health
        needs of targeted populations. Acoording to the World Gealth
        Organization (WHO)
      </p>
      <div className="cards_container">
        <div className="card">
          <GiBallHeart color="var(--color-blue-light)" fontSize={60} />

          {/* <h4>MBBS</h4> */}
          <p>Consultant cardiologist and cardiac catheter</p>
        </div>
        <div className="card">
          <GiHospitalCross color="var(--color-blue-light)" fontSize={60} />

          {/* <h4>MBBS</h4> */}
          <p>Member of the European Society of cardiology</p>
        </div>
        <div className="card">
          <GiHospital color="var(--color-blue-light)" fontSize={60} />

          {/* <h4>MBBS</h4> */}
          <p>
            Director of the Cardiac Catheterization Unit at the Ismaila medical
            Complex
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default AbouMe;

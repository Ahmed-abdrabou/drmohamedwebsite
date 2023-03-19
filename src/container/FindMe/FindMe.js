import React from "react";
import "./FindMe.css";
import images from "../../constants/images";
const FindMe = () => (
  <div className="FindMe app__container " id="FindMe">
    <h1>Find Me:</h1>
    <div className="FindMe_container ">
      <div className="location">
        <h3>Ismailia:</h3>
        <p>
          - bhay el afrang 21 aboubakr st above el zohor el gededa pharmacy -
          3rd floor(elevator)
        </p>
        <p>- tel: 0102867003 / 01203120250</p>
        <p>- From Monday To Thursday</p>
        <img src={images.ismailia_locatoion} />
      </div>
      <div className="location">
        <h3>Suze:</h3>
        <p>
          - ahmed oraby street in front of el rahama institue - 4th
          floor(elevator)
        </p>
        <p>- tel: 01272308251 / 01272308347</p>
        <p>- From Saterday To Sunday</p>
        <img src={images.suze_location} />
      </div>
    </div>
  </div>
);

export default FindMe;

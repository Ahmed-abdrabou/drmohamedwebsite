import React from "react";

import images from "../../constants/images";
import "./GetAppointment.css";

const GetAppointment = () => (
  <div className="GetAppointment app__container">
    <div className="image_container">
      <img src={images.GetAppointment} alt="GetAppointment" />
    </div>

    <form>
      <div className="input_container">
        <label for="name">Full Name:</label>
        <input type="text" id="name" placeholder="Write Your Name" required />
      </div>
      <div className="input_container">
        <label for="number">Number:</label>
        <input
          type="number"
          id="number"
          placeholder="Write Your Number"
          required
        />
      </div>
      <div className="input_container  ">
        <label for="Email">Email:</label>
        <input type="text" id="Email" placeholder="Write Your Email" />
      </div>
      <div className="input_container">
        <label for="Date">Date:</label>
        <input type="date" id="Date" />
      </div>
      <span className="custom__button">Make Appointmant</span>
    </form>
  </div>
);

export default GetAppointment;

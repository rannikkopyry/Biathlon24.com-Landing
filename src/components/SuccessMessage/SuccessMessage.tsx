import React from "react";
import Checkmark from "../../images/Checkmark.png";
import "./successmessage.scss";

function SuccessMessage() {
  return (
    <>
      <div className="success-message">
        <div className="text">
          <h2>Thank you for subscribing!</h2>
          <p>Stay tuned for updates and release date information!</p>
        </div>
      
      <div className="image">
        <img src={Checkmark} alt="" />
      </div>
      </div>
    </>
  );
}

export default SuccessMessage;

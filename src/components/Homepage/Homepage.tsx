import React from "react";
import "./homepage.scss";
import Logo from "../../images/Biathlon24uusiversio.png";
import SignUpForm from "../SignupForm/SignupForm";

function Homepage() {
  return (
    <div id="homepage" className="homepage">
    <div className="logocontainer">
    <img src={Logo} alt="" />
  </div>
  <div className="valiotsikko">
    <h2>Subscribe for our newsletter!</h2>
  </div>
  <div className="formcontainer">
  <SignUpForm />
  </div>
    </div>
    
  );
}

export default Homepage;

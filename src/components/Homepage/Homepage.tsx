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
  <div className="textcontainer">
    <h1>Something interesting is under construction...</h1>
    <p>
      Sign up for our newsletter to receive news and updates from the development of the site and the final release date!
    </p>
    <p></p>
  </div>
  <div className="formcontainer">
  <SignUpForm />
  </div>
      <div className="photocred">
        <p>Photo: YLE</p>
      </div>
    </div>
    
  );
}

export default Homepage;

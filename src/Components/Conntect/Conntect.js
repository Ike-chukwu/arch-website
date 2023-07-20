import React, { useState } from "react";
import "./Conntect.css";
import rightArrow from "../../assets/icons/icon-arrow.svg";

const Conntect = () => {
  const IDS = [1, 2, 3];
  const [inputValue, setInputValue] = useState("");
  const [inputStyle, setinputStyle] = useState(false);
  const [inputStyleNo, setinputStyleNo] = useState("");

  const clicked = (index) => {
        setinputStyle(true)
        setinputStyleNo(index)
  }

  const inputs = IDS.map((item, index) => {
    if (item == 1) {
      return <input type="text" key={index} className={inputStyle==true && inputStyleNo == index? "clicked" : ""} onClick={() => clicked(index)}  placeholder="Name" />;
    }
    if (item == 2) {
      return <input type="text" key={index} className={inputStyle==true && inputStyleNo == index? "clicked" : ""} onClick={() => clicked(index)}  placeholder="Email" />;
    }
    if (item == 3) {
      return <textarea type="text"  key={index} className={inputStyle==true && inputStyleNo == index? "clicked" : ""} onClick={() => clicked(index)}  placeholder="Message" />;
    }
  });


  return (
    <section className="contect">
      <h2>
        Connect <br />
        with us
      </h2>
      <div className="input-container">
        <div className="inputs">
          {inputs}
          {/* <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea type="text" className="message" placeholder="Message" /> */}
        </div>
        <div className="black-button">
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </section>
  );
};

export default Conntect;

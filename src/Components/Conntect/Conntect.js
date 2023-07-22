import React, { useState } from "react";
import "./Conntect.css";
import rightArrow from "../../assets/icons/icon-arrow.svg";

const Conntect = () => {
   const IDS = [
    { id: 0, value: "", valid: false, placeholder: "Name" },
    { id: 1, value: "", valid: false, placeholder: "Email" },
    { id: 2, value: "", valid: false, placeholder: "Message" },
  ];
  const [inputValue, setInputValue] = useState(IDS);
  const [inputStyle, setinputStyle] = useState(false);
  const [inputStyleNo, setinputStyleNo] = useState("");


  const clicked = (index) => {
    setinputStyle(true);
    setinputStyleNo(index);
  };

  const handleChange = (e, id) => {
    const arrayCpy = [...inputValue];
    arrayCpy.map((item) => {
      if (item.id == id) {
        item.value = e.target.value;
        item.valid = item.value == ""
      }
      return item;
    });
    console.log(arrayCpy);
    setInputValue(arrayCpy);
  };

  const validationn = () => {
    const validCheck = inputValue.some((item) => item.value == "");
    if (validCheck) {
      return;
    } else {
      window.open("mailto:archone@mail.com?subject=SendMail&body=Description");
    }
  };

  return (
    <section className="contect">
      <h2>
        Connect <br />
        with us
      </h2>
      <div className="input-container">
        <div className="inputs">
          {inputValue.map((item, index) => {
            if (index == 2) {
              return (
                <textarea
                  key={item.id}
                  onChange={(e) => handleChange(e, index)}
                  type="text"
                  className={
                    inputStyle == true && inputStyleNo == index ? "clicked" : ""
                  }
                  onClick={() => clicked(index)}
                  placeholder="Message"
                  value={item.value}
                />
              );
            }
            if (index == 1) {
              return (
                <input
                  key={item.id}
                  onChange={(e) => handleChange(e, index)}
                  type="text"
                  className={
                    inputStyle == true && inputStyleNo == index ? "clicked" : ""
                  }
                  onClick={() => clicked(index)}
                  placeholder="Email"
                  value={item.value}
                />
              );
            }
            return (
              <input
                key={item.id}
                onChange={(e) => handleChange(e, index)}
                type="text"
                className={
                  inputStyle == true && inputStyleNo == index ? "clicked" : ""
                }
                onClick={() => clicked(index)}
                placeholder="Name"
                value={item.value}
              />
            );
          })}
        </div>
        <div className="black-button" onClick={validationn}>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </section>
  );
};

export default Conntect;

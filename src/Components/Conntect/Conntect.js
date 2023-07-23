import React, { useState } from "react";
import "./Conntect.css";
import rightArrow from "../../assets/icons/icon-arrow.svg";

const Conntect = () => {
  const IDS = [
    {
      id: 0,
      value: "",
      placeholder: "Name",
      type: "text",
      required: true,
      errorMessage: "Name cant be empty",
      name: "Name",
    },
    {
      id: 1,
      value: "",
      placeholder: "Email",
      type: "email",
      required: true,
      errorMessage: "Invalid email",
      name: "Email",
    },
    {
      id: 2,
      value: "",
      placeholder: "Message",
      type: "text",
      required: true,
      errorMessage: "Maximum permittered characters is !00",
      name: "Message",
      Pattern: "",
    },
  ];

  const [inputValue, setInputValue] = useState(IDS);
  const [inputStyle, setinputStyle] = useState(false);
  const [inputStyleNo, setinputStyleNo] = useState("");

  
  
  const [focus, setFocus] = useState(false)
  const triggerFocus = () => {
    setFocus(true)
  }




  const clicked = (index) => {
    setinputStyle(true);
    setinputStyleNo(index);
  };

  const handleChange = (e, id) => {
    const arrayCpy = [...inputValue];
    arrayCpy.map((item) => {
      if (item.id == id) {
        item.value = e.target.value;
      }
      return item;
    });
    console.log(arrayCpy);
    setInputValue(arrayCpy);
  };

  const validationn = (e) => {
    e.preventDefault();
    const validCheck = inputValue.some((item) => item.value == "");
    // if (validCheck) {
    //   return;
    // } else {
    // window.open("mailto:archone@mail.com?subject=SendMail&body=Description");
    // }
  };

  return (
    <section className="contect">
      <h2>
        Connect <br />
        with us
      </h2>
      <div className="input-container">
        <form className="inputs" onSubmit={validationn}>
          {inputValue.map((item, index) => {
            if (index == 2) {
              return (
                <div>
                  <textarea
                    key={item.id}
                    onChange={(e) => handleChange(e, index)}
                    className={
                      inputStyle == true && inputStyleNo == index
                        ? "clicked"
                        : ""
                    }
                    {...item}
                    // focused = {focus.toString()}
                    // onBlur={triggerFocus}
                    onClick={() => clicked(index)}
                    value={item.value}
                  />
                  <span className="error">{item.errorMessage}</span>
                </div>
              );
            }
            if (index == 1) {
              return (
                <div>
                  <input
                    key={item.id}
                    onChange={(e) => handleChange(e, index)}
                    className={
                      inputStyle == true && inputStyleNo == index
                        ? "clicked"
                        : ""
                    }
                    {...item}
                    // focused = {focus.toString()}
                    // onBlur={triggerFocus}
                    onClick={() => clicked(index)}
                    value={item.value}
                  />
                  <span className="error">{item.errorMessage}</span>
                </div>
              );
            }
            return (
              <div>
                <input
                  key={item.id}
                  onChange={(e) => handleChange(e, index)}
                  className={
                    inputStyle == true && inputStyleNo == index ? "clicked" : ""
                  }
                  onClick={() => clicked(index)}
                  value={item.value}
                  {...item}
                  // focused = {focus.toString()}
                  // onBlur={triggerFocus}
                />
                <span className="error">{item.errorMessage}</span>
              </div>
            );
          })}
          <button className="black-button">
            <i className="fas fa-chevron-right"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Conntect;

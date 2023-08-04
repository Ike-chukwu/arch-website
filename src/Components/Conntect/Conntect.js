import React, { useState } from "react";
import "./Conntect.css";
import Input from "../../Input/Input";

const Conntect = () => {
  const IDS = [
    {
      id: 0,
      value: "",
      placeholder: "Name",
      type: "text",
      required: true,
      errorMessage: "Name is too short",
      name: "Name",
      elementType: "input",
      pattern: "^.{3,}$",
    },
    {
      id: 1,
      value: "",
      placeholder: "Email",
      type: "email",
      required: true,
      errorMessage: "Invalid email",
      name: "Email",
      elementType: "input",
    },
    {
      id: 2,
      value: "",
      placeholder: "Message",
      type: "text",
      required: true,
      errorMessage:
        "Please your message should contain at least 50 characters.We want you to be descriptive enough",
      name: "Message",
      pattern: "^.{50,}$",
      elementType: "textarea",
    },
  ];

  const [inputValue, setInputValue] = useState(IDS);
  const [inputStyleNo, setinputStyleNo] = useState("");


  const clicked = (index) => {
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
    setInputValue(arrayCpy);
  };

  const validationn = (e) => {
    e.preventDefault();
    window.open("mailto:archone@mail.com?subject=SendMail&body=Description");
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
            return (
              <Input
                key={index}
                itemId={index}
                value={item.value}
                errorMessage={item.errorMessage}
                {...item}
                handleChange={handleChange}
                clickHandler={clicked}
                inputStyleNo={inputStyleNo}
              />
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

import React, { useState } from "react";

const Input = (props) => {
  let content;

  //onChangeHandler
  const [focus, setFocus] = useState(false);


  const changeFocusState = () => {
    setFocus(true)
  }

  switch (props.elementType) {
    case "input":
      content = (
        <div>
          <input
            key={props.itemId}
            onChange={(e) => props.handleChange(e, props.itemId)}
            className={props.inputStyleNo == props.itemId ? "clicked" : ""}
            {...props}
            onBlur={changeFocusState}
            focused={focus.toString()}
            onClick={() => props.clickHandler(props.itemId)}
            value={props.value}
          />
          <span className="error">{props.errorMessage}</span>
        </div>
      );
      break;
    case "textarea":
      content = (
        <div>
          <textarea
            key={props.itemId}
            onChange={(e) => props.handleChange(e, props.itemId)}
            className={props.inputStyleNo == props.itemId ? "clicked" : ""}
            {...props}
            onBlur={changeFocusState}
            focused={focus.toString()}
            onClick={() => props.clickHandler(props.itemId)}
            value={props.value}
          />
          <span className="error">{props.errorMessage}</span>
        </div>
      );
      break;

    default:
      break;
  }

  return content;
};

export default Input;

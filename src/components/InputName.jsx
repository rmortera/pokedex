import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeUserName } from "../store/slices/userName.slice";

const InputName = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const clickButton = () => {
    dispatch(changeUserName(inputValue));
    navigate("/pokedex");
  };

  return (
    <div>
      <h1>Hello trainer!</h1>
      <h3>Give me your name to start:</h3>
      <input
        type="text"
        value={inputValue}
        placeholder="name"
        onChange={(e) => setInputValue(e.target.value)}
      />{" "}
      <button onClick={clickButton}>submit</button>
    </div>
  );
};

export default InputName;

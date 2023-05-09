import React, { useState } from "react";
import ".//App.css";
import { Button, TextField } from "@mui/material";
import Image from "./assets/Image";

export default function App() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  const [massege, setMassege] = useState("");

  const getBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("please Enter Valid Details");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(2));

      if (bmi < 25) {
        setMassege("you are underWeight");
      } else if (bmi > 25 && bmi < 30) {
        setMassege("you are Healthy weight");
      } else {
        setMassege("you are over-weight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };
  return (
    <>
      <div>
        <div>
          <Image/>
          <h2>- BMI Calculator -</h2>
        </div>
        <br/>
        <form onSubmit={getBmi}>
          <TextField
            label="Enter your Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <br />
          <br />
          <TextField
            label="Enter your Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <br />
          <br />
          <button className="btn btn-warning" onClick={reload}>Reload</button>&nbsp;&nbsp;
          <button className="btn btn-danger" type="submit" onClick={() => getBmi()}>Get-BMI</button>
          <br/><br/>
          
          <h3><span style={{color:"black"}}>BMI is : </span>{bmi}</h3>
          <h6>
            <u>{massege}</u>
          </h6>
        </form>
      </div>
    </>
  );
}

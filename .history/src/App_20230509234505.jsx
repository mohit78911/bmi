import React, { useState } from "react";
import ".//App.css";
import DeveloperName from "./assets/DeveloperName";
import Image from "./assets/Image";
import InputBox from "./assets/InputBox";
import Title from "./assets/Title";

export default function App(props) {
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
          <Image />
          <Title title="- BMI Calculator -"/>
        </div>
        <InputBox
          getbmi={getBmi}
          weight={weight}
          setweight={setWeight}
          height={height}
          setheight={setHeight}
          reload={reload}
          bmi={bmi}
          massege={massege}
        />
        <DeveloperName/>
      </div>
    </>
  );
}

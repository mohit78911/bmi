import React from 'react'
import { Button, TextField } from "@mui/material";
import "..//App.css";


export default function InputBox(props) {
  return (
    <div>
        <form onSubmit={props.getbmi}>
          <TextField
            label="Enter your Weight"
            value={props.weight}
            onChange={(e) => props.setweight(e.target.value)}
          />
          <br />
          <br />
          <TextField
            label="Enter your Height"
            value={props.height}
            onChange={(e) => props.setheight(e.target.value)}
          />
          <br />
          <br />
          <button className="btn btn-warning" onClick={props.reload}>Reload</button>&nbsp;&nbsp;
          <button className="btn btn-danger" type="submit">Get-BMI</button>
          <br/><br/>
          
          <h3><span style={{color:"black"}}>BMI is : </span>{props.bmi}</h3>
          <h6>
            <u>{props.massege}</u>
          </h6>
        </form>
    </div>
  )
}

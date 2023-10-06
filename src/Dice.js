import React, {Component} from "react";
import "./css/buttons.css"

const Dice = ( props ) =>{
  return(
    <div>
      <button  className="button roll-dice" type="button" onClick={props.diceValue} >Roll the die</button>
    </div>
  )
}


export default Dice;

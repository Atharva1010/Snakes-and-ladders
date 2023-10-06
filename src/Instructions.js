import React from "react"
import "./css/text.css"

class Instructions extends React.Component{
  render(){
    return(
      <div className="text">
        <h1 className="title">How to play:</h1>
        <p>1. Decide who will be the first player.</p>
        <p>2. Click on the button that says "Roll the Dice". The dice will tell you how many spaces the player will move.</p>
        <p>3. If you hit a snake's head you will go down, but if you hit a ladder you will go up.</p>
        <p>4. The first player that reaches 100 will be the winner.</p>
      </div>
    )
  }
}


export default Instructions

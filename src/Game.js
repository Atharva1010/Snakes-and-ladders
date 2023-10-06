import React, { Component } from "react"
import "./css/board.css"
import "./css/buttons.css"
import Player1 from "./Player1"
import Player2 from "./Player2"
import Dice from "./Dice"
import ReactDOM from 'react-dom';
import position from "./Position"
import swal from 'sweetalert2'
import ShowDice from "./ShowDice"
import NewGame from "./NewGame"

class Game extends Component {

state = {
  player1Pos:0,
  player2Pos:0,
  currentPlayer: "player1",
  positionObj: position,
  diceValue: null
}

ChangeDiceValue = () =>{

   let rand = Math.floor(Math.random() * ((6 - 1) + 1) + 1);

    let pos = 0
   if(this.state.currentPlayer === "player1"){

     let val = this.state.player1Pos + rand;
     if(val >100){

     }else{pos = this.state.positionObj[val]
     this.setState({
       diceValue: rand,
       currentPlayer: "player2",
       player1Pos: pos
     },()=>{
       this.playerWon()
     })}

   }else if (this.state.currentPlayer === "player2") {
     let val = this.state.player2Pos + rand;
     if(val > 100){
     }else{pos = this.state.positionObj[val]
     this.setState({
       diceValue: rand,
       currentPlayer: "player1",
       player2Pos: pos
     },()=>{
       this.playerWon()
     })}

   }

}
playerWon() {
  if (this.state.player1Pos === 100){
    swal({
      title: 'YOU WON!',
      imageUrl: require("./images/winner-1.jpg"),
      imageWidth: 500,
      imageHeight: 300,
      imageAlt: 'Custom image',
      animation: false
  })
  } else if (this.state.player2Pos === 100){
    swal({
      title: 'YOU WON!',
      imageUrl: require("./images/winner-2.jpg"),
      imageWidth: 500,
      imageHeight: 300,
      imageAlt: 'Custom image',
      animation: false
  })
  }
}


newGame = () => {
  this.setState({
    player1Pos:0,
    player2Pos:0,
    currentPlayer: "player1",
    positionObj: position,
    diceValue: null,
    flag: false
  })
}

setPlayersPos=(num)=>{
 if(this.state.player1Pos== num && this.state.player2Pos == num) return (<div><Player1/> <Player2/></div>)
 if(this.state.player1Pos== num) return (<Player1/>)
 if(this.state.player2Pos== num) return (<Player2/>)
 return null
}

render() {
  const boardSize = 10;

  const boardPositions = Array.from({ length: boardSize * boardSize }, (_, i) => {
  const row = Math.floor(i / boardSize);
  const col = row % 2 === 0 ?  boardSize - 1 - (i % boardSize) : i % boardSize;
  return (row * boardSize) + col + 1;
}).reverse();


  return (
    <div className="flex-parent">
      <div className="buttons-positioning">
        <Dice diceValue={this.ChangeDiceValue}/>
        <br/>
        <NewGame newGame={this.newGame}/>
        <br/>
      </div>
      <ShowDice diceValue={this.state.diceValue}/>
      <div className="board-parent">
        <div className="board-image"></div>
        <div className="board-wrap">
          {boardPositions.map(position => (
            <div className="board" id={position.toString()} key={position}>
              {position}{this.setPlayersPos(position)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
}



export default Game

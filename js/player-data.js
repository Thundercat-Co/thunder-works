'use strict';

let startForm = document.getElementById('startGameForm');
let allPlayers = [];

function Player(user){
  this.user = user;
  this.score =0;
  console.log(this);
  allPlayers.push(this);
}
function handleClick(event){
  let name = event.target.name.value;
  let oldArray = localStorage.getItem('playerArray');
  if(oldArray){
    allPlayers = JSON.parse(oldArray);
  }
  new Player(name);
  let allPlayersString = JSON.stringify(allPlayers);
  console.log(allPlayersString);
  localStorage.setItem('playerArray', allPlayersString);
  event.preventDefault();
}
startForm.addEventListener('submit', handleClick);
// startButton.addEventListener('submit', handleSubmit)
// So we don't get confused: SSGP
//  stringify ---> js to local storage/JSON
//  parse -------> local storage/JSON to js
// JSON.stringify() A common use of JSON is to exchange data to/from a web server.
// When sending data to a web server, the data has to be a string. 
//Convert a JavaScript object into a string with JSON.stringify() .
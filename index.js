// An IIFE to house the entire Game
const TicTacToe = (function() {
  const Game = {
    gameboard : [],
  };

// A factory function to create new players
  function CreatePlayers(name, marker) {
    return {
    name,
    marker,
    playerDetails : function () {
      return `Name: ${this.name}, Marker: ${this.marker}`
      }
    }
  }
  
const player1 = CreatePlayers('Meatwad', 'X');
const computer = CreatePlayers('CPU1', 'O');

  const GameController = {
    //Some methods to place player's markers
  }

// Anything in this return becomes
// accessable outside the IIFE (public)
  return {
    
    player1, 
    computer,
    GameController
  };
}());

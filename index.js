// An IIFE to house the entire Game
const TicTacToe = (function() {
const Game = {
    gameboard: [],
// A factory function that loops and 
// somehow makes 3 arrays inside gameboard
    MakeArray: function(row, col, init) {
      const arr = [];
      for (let i = 0; i < row; i++) {
        arr[i] = [];
        for (let j = 0; j < col; j++) {
          arr[i][j] = init;
        }
      }
      this.gameboard = arr; // store it inside Game object
      return arr;
    }
  };

  Game.MakeArray(3, 3, 0);
  console.log(Game.gameboard);

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
     // Public method to set a cell on the gameboard
      setCell: function(row, col, marker) {
        Game.gameboard[row][col] = marker;
      },
      // Public method to get a cell value
      getCell: function(row, col) {
        return Game.gameboard[row][col];
      },
      // Public method to get the entire gameboard (for displaying)
      getGameboard: function() {
        return Game.gameboard;
      }
  }

// Anything in this return becomes
// accessable outside the IIFE (public)
  return {
    Game,
    player1, 
    computer,
    GameController
  };
}());

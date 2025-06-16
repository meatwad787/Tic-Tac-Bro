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
    setCell: function(row, col, marker) {
      if(Game.gameboard[row][col] === 0) {
        Game.gameboard[row][col] = marker;
        TicTacToe.Play();
        return 'Marker set';
      }
     else {console.log('STFU')
      return 'Spot taken'
     }
    },
    getCell: function(row, col) {
      return Game.gameboard[row][col];
    },
    getGameboard: function() {
      console.table();
      return Game.gameboard;
    }
  }

// if (any array-numbers at index-numbers 
//  === any one player.marker && meets game-end conditions {
// do something }
 // Win conditions for player1
 function Play() {
  if (TicTacToe.Game.gameboard[0][0] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[0][1] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[0][2] === TicTacToe.player1.marker) console.log(`${TicTacToe.player1.name} wins!`);
  else if (TicTacToe.Game.gameboard[1][0] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[1][1] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[1][2] === TicTacToe.player1.marker) console.log(`${TicTacToe.player1.name} wins!`);
  else if (TicTacToe.Game.gameboard[2][0] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[2][1] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[2][2] === TicTacToe.player1.marker) console.log(`${TicTacToe.player1.name} wins!`);

  else if (TicTacToe.Game.gameboard[0][0] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[1][0] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[2][0] === TicTacToe.player1.marker) console.log(`${TicTacToe.player1.name} wins!`);
  else if (TicTacToe.Game.gameboard[0][1] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[1][1] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[2][1] === TicTacToe.player1.marker) console.log(`${TicTacToe.player1.name} wins!`);
  else if (TicTacToe.Game.gameboard[0][2] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[1][2] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[2][2] === TicTacToe.player1.marker) console.log(`${TicTacToe.player1.name} wins!`);

  else if (TicTacToe.Game.gameboard[0][0] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[1][1] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[2][2] === TicTacToe.player1.marker) console.log(`${TicTacToe.player1.name} wins!`);
  else if (TicTacToe.Game.gameboard[0][2] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[1][1] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[2][0] === TicTacToe.player1.marker) console.log(`${TicTacToe.player1.name} wins!`);

  else if (TicTacToe.Game.gameboard[0][0] === TicTacToe.computer.marker && TicTacToe.Game.gameboard[0][1] === TicTacToe.computer.marker && TicTacToe.Game.gameboard[0][2] === TicTacToe.computer.marker) console.log(`${TicTacToe.computer.name} wins!`);
  else if (TicTacToe.Game.gameboard[1][0] === TicTacToe.computer.marker && TicTacToe.Game.gameboard[1][1] === TicTacToe.computer.marker && TicTacToe.Game.gameboard[1][2] === TicTacToe.computer.marker) console.log(`${TicTacToe.computer.name} wins!`);
  else if (TicTacToe.Game.gameboard[2][0] === TicTacToe.computer.marker && TicTacToe.Game.gameboard[2][1] === TicTacToe.computer.marker && TicTacToe.Game.gameboard[2][2] === TicTacToe.computer.marker) console.log(`${TicTacToe.computer.name} wins!`);

  else if (TicTacToe.Game.gameboard[0][0] === TicTacToe.computer.marker && TicTacToe.Game.gameboard[1][0] === TicTacToe.computer.marker && TicTacToe.Game.gameboard[2][0] === TicTacToe.computer.marker) console.log(`${TicTacToe.computer.name} wins!`);
  else if (TicTacToe.Game.gameboard[0][1] === TicTacToe.computer.marker && TicTacToe.Game.gameboard[1][1] === TicTacToe.computer.marker && TicTacToe.Game.gameboard[2][1] === TicTacToe.computer.marker) console.log(`${TicTacToe.computer.name} wins!`);
  else if (TicTacToe.Game.gameboard[0][2] === TicTacToe.computer.marker && TicTacToe.Game.gameboard[1][2] === TicTacToe.computer.marker && TicTacToe.Game.gameboard[2][2] === TicTacToe.computer.marker) console.log(`${TicTacToe.computer.name} wins!`);

  else if (TicTacToe.Game.gameboard[0][0] === TicTacToe.computer.marker && TicTacToe.Game.gameboard[1][1] === TicTacToe.computer.marker && TicTacToe.Game.gameboard[2][2] === TicTacToe.computer.marker) console.log(`${TicTacToe.computer.name} wins!`);
  else if (TicTacToe.Game.gameboard[0][2] === TicTacToe.computer.marker && TicTacToe.Game.gameboard[1][1] === TicTacToe.computer.marker && TicTacToe.Game.gameboard[2][0] === TicTacToe.computer.marker) console.log(`${TicTacToe.computer.name} wins!`);

  else if (
    TicTacToe.Game.gameboard[0][0] !== 0 && TicTacToe.Game.gameboard[0][1] !== 0 && TicTacToe.Game.gameboard[0][2] !== 0 &&
    TicTacToe.Game.gameboard[1][0] !== 0 && TicTacToe.Game.gameboard[1][1] !== 0 && TicTacToe.Game.gameboard[1][2] !== 0 &&
    TicTacToe.Game.gameboard[2][0] !== 0 && TicTacToe.Game.gameboard[2][1] !== 0 && TicTacToe.Game.gameboard[2][2] !== 0
  ) {
    console.log("It's a tie!");
  } else {
    console.log("Game is still in progress...");
  }
  return ''
}


// Anything in this return becomes
// accessable outside the IIFE (public)
  return {
    Game,
    player1, 
    computer,
    GameController,
    Play,
    
  };
}());


TicTacToe.Play()

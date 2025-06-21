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
    },
    getGameboard: function () {
      return this.gameboard;
    }
  };
// loops to display the same kind of 
//matrix (like above) on the screen 
const Display = {
   render: function (board) {
      const container = document.querySelector('#container');
      container.innerHTML = ''; // clear previous
      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
          const square = document.createElement('div');
          square.setAttribute('data-row', i);
          square.setAttribute('data-col', j);
          square.addEventListener('click', (e) => {
            if (isGameOver) return;
            const row = parseInt(e.target.dataset.row);
            const col = parseInt(e.target.dataset.col);
            TicTacToe.GameController.setCell(row, col, CurrentPlayer.marker);
            switch (CurrentPlayer) {
              case player1:
                CurrentPlayer = player2;
                break;

              case player2:
                CurrentPlayer = player1
                break;

              default: alert('skibidi this is an error')
                break;
              }

            TicTacToe.Display.render(TicTacToe.Game.getGameboard()); // re-render board
            TicTacToe.Play();
          })
          square.classList.add('square');
          square.textContent = board[i][j]; // could be 0, 'X', or 'O'
          container.appendChild(square);
         }
     }
  }
}

  Game.MakeArray(3, 3, 0);
  Display.render(Game.getGameboard())
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
  
  //Use Prompts to set player names 
  //CurrentPlayer uses a switch to place each player marker
const player1 = CreatePlayers(prompt('Player 1 Write your name'), '❌')
const player2 = CreatePlayers(prompt('Player 2 Write your name'), '⭕')
let CurrentPlayer = player1;

  const GameController = {
    //sets the marker on the "cells" passed ass arguments
    //calls Play() after every move
    setCell: function(row, col, marker) {
      if(Game.gameboard[row][col] === 0) {
        Game.gameboard[row][col] = marker;
        // TicTacToe.Play();
        return 'Marker set';
      }
     else {console.log('Can\'t place here!!')
      return 'Spot taken'
     }
    },
    //Used to look inside a "cell"
    getCell: function(row, col) {
      return Game.gameboard[row][col];
    },
    getGameboard: function() {
      console.table();
      return Game.gameboard;
    }
  }

//Check conditions for a winner or a tie
 function Play() {
  if (TicTacToe.Game.gameboard[0][0] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[0][1] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[0][2] === TicTacToe.player1.marker) {
    console.log(`${TicTacToe.player1.name} wins!`);
    gameOver(TicTacToe.player1)
  }  
  else if (TicTacToe.Game.gameboard[1][0] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[1][1] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[1][2] === TicTacToe.player1.marker) {
    console.log(`${TicTacToe.player1.name} wins!`);
    gameOver(TicTacToe.player1)
  } 
  else if (TicTacToe.Game.gameboard[2][0] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[2][1] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[2][2] === TicTacToe.player1.marker) {
    console.log(`${TicTacToe.player1.name} wins!`);
    gameOver(TicTacToe.player1)
  }
  else if (TicTacToe.Game.gameboard[0][0] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[1][0] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[2][0] === TicTacToe.player1.marker) {
    console.log(`${TicTacToe.player1.name} wins!`);
    gameOver(TicTacToe.player1)
  } 
  else if (TicTacToe.Game.gameboard[0][1] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[1][1] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[2][1] === TicTacToe.player1.marker) {
    console.log(`${TicTacToe.player1.name} wins!`);
    gameOver(TicTacToe.player1)
  }
  else if (TicTacToe.Game.gameboard[0][2] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[1][2] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[2][2] === TicTacToe.player1.marker) {
    console.log(`${TicTacToe.player1.name} wins!`);
    gameOver(TicTacToe.player1)
  }
  else if (TicTacToe.Game.gameboard[0][0] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[1][1] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[2][2] === TicTacToe.player1.marker) {
    console.log(`${TicTacToe.player1.name} wins!`);
    gameOver(TicTacToe.player1)
  }  
  else if (TicTacToe.Game.gameboard[0][2] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[1][1] === TicTacToe.player1.marker && TicTacToe.Game.gameboard[2][0] === TicTacToe.player1.marker) {
    console.log(`${TicTacToe.player1.name} wins!`);
    gameOver(TicTacToe.player1)
  }
  else if (TicTacToe.Game.gameboard[0][0] === TicTacToe.player2.marker && TicTacToe.Game.gameboard[0][1] === TicTacToe.player2.marker && TicTacToe.Game.gameboard[0][2] === TicTacToe.player2.marker) {
    console.log(`${TicTacToe.player2.name} wins!`);
    gameOver(TicTacToe.player2)
  }  
  else if (TicTacToe.Game.gameboard[1][0] === TicTacToe.player2.marker && TicTacToe.Game.gameboard[1][1] === TicTacToe.player2.marker && TicTacToe.Game.gameboard[1][2] === TicTacToe.player2.marker) {
    console.log(`${TicTacToe.player2.name} wins!`);
     gameOver(TicTacToe.player2)
  }  
  else if (TicTacToe.Game.gameboard[2][0] === TicTacToe.player2.marker && TicTacToe.Game.gameboard[2][1] === TicTacToe.player2.marker && TicTacToe.Game.gameboard[2][2] === TicTacToe.player2.marker) {
    console.log(`${TicTacToe.player2.name} wins!`);
     gameOver(TicTacToe.player2)
  }
  else if (TicTacToe.Game.gameboard[0][0] === TicTacToe.player2.marker && TicTacToe.Game.gameboard[1][0] === TicTacToe.player2.marker && TicTacToe.Game.gameboard[2][0] === TicTacToe.player2.marker) {
    console.log(`${TicTacToe.player2.name} wins!`);
     gameOver(TicTacToe.player2)
  }  
  else if (TicTacToe.Game.gameboard[0][1] === TicTacToe.player2.marker && TicTacToe.Game.gameboard[1][1] === TicTacToe.player2.marker && TicTacToe.Game.gameboard[2][1] === TicTacToe.player2.marker) {
    console.log(`${TicTacToe.player2.name} wins!`);
     gameOver(TicTacToe.player2)
  } 
  else if (TicTacToe.Game.gameboard[0][2] === TicTacToe.player2.marker && TicTacToe.Game.gameboard[1][2] === TicTacToe.player2.marker && TicTacToe.Game.gameboard[2][2] === TicTacToe.player2.marker) {
    console.log(`${TicTacToe.player2.name} wins!`);
     gameOver(TicTacToe.player2)
  }
  else if (TicTacToe.Game.gameboard[0][0] === TicTacToe.player2.marker && TicTacToe.Game.gameboard[1][1] === TicTacToe.player2.marker && TicTacToe.Game.gameboard[2][2] === TicTacToe.player2.marker) {
    console.log(`${TicTacToe.player2.name} wins!`);
     gameOver(TicTacToe.player2)
  }
  else if (TicTacToe.Game.gameboard[0][2] === TicTacToe.player2.marker && TicTacToe.Game.gameboard[1][1] === TicTacToe.player2.marker && TicTacToe.Game.gameboard[2][0] === TicTacToe.player2.marker) {
    console.log(`${TicTacToe.player2.name} wins!`);
    gameOver(TicTacToe.player2)
    
  } 

  else if (
    TicTacToe.Game.gameboard[0][0] !== 0 && TicTacToe.Game.gameboard[0][1] !== 0 && TicTacToe.Game.gameboard[0][2] !== 0 &&
    TicTacToe.Game.gameboard[1][0] !== 0 && TicTacToe.Game.gameboard[1][1] !== 0 && TicTacToe.Game.gameboard[1][2] !== 0 &&
    TicTacToe.Game.gameboard[2][0] !== 0 && TicTacToe.Game.gameboard[2][1] !== 0 && TicTacToe.Game.gameboard[2][2] !== 0
  ) {
    console.log("It's a tie!");
    gameOver('tie')
  } else {
    console.log("Game is still in progress...");
  }
  return ''
};

let isGameOver = false
function gameOver(winner) {
  // Optional: visually disable the board
  document.querySelectorAll('.square').forEach(sq => sq.style.pointerEvents = 'none');

  const Result = document.querySelector('#result');
  if (winner === 'tie') {
    console.log("It's a tie!");
    Result.innerHTML = 'It\'s a Tie!!'
  } else {
    console.log(`${winner.name} wins!`);
    Result.innerHTML = `${winner.name} wins!`
  }

  isGameOver = true;
};


// Anything in this return becomes
// accessable outside the IIFE (public)
  return {
    Game,
    player1, 
    player2,
    GameController,
    Play,
    Display,
    // CurrentPlayer
    
  };
}());
const Reset = document.querySelector('#reset');
Reset.addEventListener('click', () =>  window.location.reload())
//Use this to run it again later
// TicTacToe.Display.render(TicTacToe.Game.getGameboard())
// TicTacToe.Play()

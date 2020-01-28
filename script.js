const game_board = document.getElementById('gameboard')
const tile = document.querySelectorAll('.tile')
const player_one = document.getElementById('player-one')
const player_two = document.getElementById('player-two')
let player1 = 'x'
let player2 = 'o'
let player1Tile = 'z'
let player2Tile = 'r'
let currentPlayer=false
let tileContents
 

const winningCombo=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6] 
]

const Gameboard = (() => {
  const placeMark = (tileContent) => {
        tileContents=tileContent
  
  }
  const switchTurns = () => {
    currentPlayer = !currentPlayer;
 
}
return{
    placeMark,
    switchTurns
}
})();

const Players = () => {
  
}

const Game = (() => {

    let begin_game = currentPlayer ? player1 : player2
    Gameboard.placeMark(begin_game)
    Gameboard.switchTurns()
    const beginGame = () => {
             tile.forEach(function(element){  
                element.addEventListener('click', () => {
                    element.textContent= tileContents}
                    )
                })      
        }

return {
    beginGame,
   
}

})();

Game.beginGame();





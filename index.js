window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    let gameBoard = ['', '','','','','','','',''];
    let currentPlayer = 'x';
    let isGameActive = true;

const PLAYERX_WON = "PLAYERX_WON";
const PLAYERO_WON = "PLAYERO_WON";
const TIE = "TIE";

 
let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function checkForWinner(){
    winningCombinations.forEach(function(combination){
        let check = combination.every(idx => tiles[idx].innerText.trim() == currentPlayer)
        if(check){
            highlightTiles(combination)
            isGameActive = false;
        }
    })
    return;
}

// if (checkForWinner()) {
//     announce(currentPlayer === 'x' ? PLAYERX_WON : PLAYERO_WON);
//     return;
// }

if (!gameBoard.includes('')) {
    announce(TIE);
}

const isValidAction = (tile) => {
    if (tile.innerText === 'x' || tile.innerText === 'o'){
        return false;
    }

    return true;
}

const resetGameBoard = () => {
    gameBoard = ['', '','','','','','','',''];
    isGameActive = true;
    announcer.classList.add('hide');
    currentPlayer = 'x';
    // if (currentPlayer === 'o') {
    //     changePlayer();
    // }

    tiles.forEach(tile => {
        tile.innerText = '';
        tile.classList.remove('playerx');
        tile.classList.remove('playero');
        tile.classList.remove('highlight');
    });
    // tiles.forEach(function(tile){
    //     tile.addEventListener('click', function(){
    //         if(tile.innerText.trim() != "") return
    //         tile.innerText = currentPlayer
    //         checkForWinner()
    //         currentPlayer = currentPlayer == "x" ? "o" : "x"
    //     })
    // })
}

const updateGameBoard = (index) => {
    gameBoard[index] = currentPlayer;
}

function highlightTiles(combination){
    combination.forEach(function(idx){
        tiles[idx].classList.add('highlight')
    })
}

tiles.forEach(function(tile){
    tile.addEventListener('click', function(){
        if(tile.innerText.trim() != "") return
        if(!isGameActive) return
        tile.innerText = currentPlayer
        checkForWinner()
        currentPlayer = currentPlayer == "x" ? "o" : "x"
    })
})

const announce = (type) => {
    switch(type){
        case PLAYERO_WON:
            announcer.innerHTML = 'Player <span class=playero">o</span> Won';
            break;
        case PLAYERX_WON:
            annoucer.innerHTML = 'Player <span class="playerx">x</span> Won';
            break;
        case TIE:
            announcer.innerText = 'Tie';
    }
    announcer.classList.remove('hide');
};

resetButton.addEventListener('click', resetGameBoard);
});


// reset button needs to add back the event listeners 


// console.log("hello")

// let square = document.querySelector('.square')
// square = Array.from(square)

// const resetButton = document.getElementById("reset");
// const gameboard = document.getElementById("gameboard");

// let playerChoice = "x"

// let winningCombinations = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 5, 6],
// ]

// function checkForWinner(){
//     winningCombinations.forEach(function(combination){
//         let check = combination.every(idx => square[idx].innerText.trim() == playerChoice)
//         if(check){
//             alert(playerChoice + " has won")
//         }
//     })
// }

// gameboard.addEventListener(
//     "click",
//     function() {console.log(gameboard);
//         if (playerChoice === "x"){
//             playerChoice = "o"
//         } else {
//             playerChoice = "x"
//         }
//         checkForWinner()
//     },
//     {
//     passive: true,
//     once: false
//     }
// );

// square.forEach(function(square){
//     square.addEventListener('click', function(){
//         if(square.innerText.trim() != " ") return
//         square.innerText =  playerChoice
//         checkForWinner()
//         playerChoice = playerChoice == "x" ? "o" : "x"
//     })
// })

// resetButton.addEventListener(
//     "click",
//     function() {console.log(resetButton)},
//     {
//     passive: true,
//     once: true
//     }
// );

// // const row1square1 = document.getElementById("row1square1");
// //     row1square1.addEventListener(
// //         "click",
// //         function() {
// //             console.log(row1square1)
// //             row1square1.textContent = playerChoice;
// //         },
// //         {
// //         passive: true,
// //         once: true
// //         }
// //     );

// // const row1square2 = document.getElementById("row1square2");
// //     row1square2.addEventListener(
// //         "click",
// //         function() {
// //             console.log(row1square2)
// //             row1square2.textContent = playerChoice;
// //         },
// //         {
// //         passive: true,
// //         once: true
// //         }
// //     );

    
// // const row1square3 = document.getElementById("row1square3");
// //     row1square3.addEventListener(
// //         "click",
// //         function() {
// //             console.log(row1square3)
// //             row1square3.textContent = playerChoice;
// //         },
// //         {
// //         passive: true,
// //         once: true
// //         }
// //     );

// // const row2square1 = document.getElementById("row2square1");
// //     row2square1.addEventListener(
// //         "click",
// //         function() {
// //             console.log(row2square1)
// //             row2square1.textContent = playerChoice;
// //         },
// //         {
// //         passive: true,
// //         once: true
// //         }
// //     );

// // const row2square2 = document.getElementById("row2square2");
// //     row2square2.addEventListener(
// //         "click",
// //         function() {
// //             console.log(row2square2)
// //             row2square2.textContent = playerChoice;
// //         },
// //         {
// //         passive: true,
// //         once: true
// //         }
// //     );

// // const row2square3 = document.getElementById("row2square3");
// //     row2square3.addEventListener(
// //         "click",
// //         function() {
// //             console.log(row2square3)
// //             row2square3.textContent = playerChoice;
// //         },
// //         {
// //         passive: true,
// //         once: true
// //         }
// //     );

// // const row3square1 = document.getElementById("row3square1");
// //     row3square1.addEventListener(
// //         "click",
// //         function() {
// //             console.log(row3square1)
// //             row3square1.textContent = playerChoice;
// //         },
// //         {
// //         passive: true,
// //         once: true
// //         }
// //     );

// // const row3square2 = document.getElementById("row3square2");
// //     row3square2.addEventListener(
// //         "click",
// //         function() {
// //             console.log(row3square2)
// //             row3square2.textContent = playerChoice;
// //         },
// //         {
// //         passive: true,
// //         once: true
// //         }
// //     );

// // const row3square3 = document.getElementById("row3square3");
// //     row3square3.addEventListener(
// //         "click",
// //         function() {
// //             console.log(row3square3)
// //             row3square3.textContent = playerChoice;
// //         },
// //         {
// //         passive: true,
// //         once: true
// //         }
// //     );
import {
    dumbCPU,
    changeDiffBot
} from './DumbCPU.js'

let turn = 'X'
let win = 0
let board = Array.from(document.getElementsByClassName('box'))
let boardValue = new Array(9).fill(null);
// let boardValue = [
//     'X', 'O', 'O', 
//     'X', 'O', null, 
//     'X', null, null]


export let winningTurn = [
    [0,1,2], 
    [0,4,8], 
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]]

const startGame = () => {
    board.forEach(box => box.addEventListener('click', boxClicked))
}

restartButton.addEventListener('click', restart)
DumbBot.addEventListener('click', dumbBot)
SmartBot.addEventListener('click', smartBot)

function dumbBot(){
    changeDiffBot(0)
    startGame()
}

function smartBot(){
    changeDiffBot(1)
    startGame()
}


function restart() {
    // boardValue = Array(9).fill(null);
    // board.forEach(element => {
    //     element.innerText = ''
    // });
    // document.getElementById("playerTurn").innerHTML = 'TIC TAC TOE';
    // turn = 'O'
    // win = 0
    for(let i=0;i<9;i++){
        document.getElementById(i).innerHTML = '';
    }
    boardValue = Array(9).fill(null);
    dumbCPU(boardValue)
}

export function checkWinning(boardValue, mark){
    for(let i=0;i<8;i++){
        if(boardValue[winningTurn[i][0]] == mark && boardValue[winningTurn[i][1]] == mark && boardValue[winningTurn[i][2]] == mark){
            return 1
        }
    }
    return 0
}

function boxClicked(e) {
    if(win==0){
        const id = e.target.id
        if(!boardValue[id]){
            boardValue[id] = 'X';
            e.target.innerText = 'X';
            if(checkWinning(boardValue, 'X')){
                win = 1
                return
            }
            if(turn == 'X'){
                dumbCPU(boardValue)
                // turn = 'X';
                // document.getElementById("playerTurn").innerHTML = turn + ' TURN';
                return
            }
            // turn = 'O';
            // document.getElementById("playerTurn").innerHTML = turn + ' TURN';
            // return
        }
    } 
}

startGame()
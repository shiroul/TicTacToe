import {
    dumbCPU
} from './DumbCPU.js'

let turn = 'O'
let win = 0
let board = Array.from(document.getElementsByClassName('box'))
let boardValue = new Array(9).fill(null);
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

function restart() {
    boardValue = Array(9).fill(null);
    board.forEach(element => {
        element.innerText = ''
    });
    document.getElementById("playerTurn").innerHTML = 'TIC TAC TOE';
    turn = 'O'
    win = 0
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
            boardValue[id] = turn;
            e.target.innerText = turn;
            if(checkWinning(boardValue, turn)){
                win = 1
                return
            }
            if(turn == 'O'){
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
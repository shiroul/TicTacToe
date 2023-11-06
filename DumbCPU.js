import {
    checkWinning
} from './Logic.js'

let cpuSmart = 0
let turn = 'O'

export function changeDiffBot(x){
    if(x){
        cpuSmart = 1

        return
    }
    cpuSmart = 0
}

export function dumbCPU(boardValue){
    let temp
    if(cpuSmart){
        turn = 'O'
        temp = smartCPU(boardValue)
        boardValue[temp] = turn
        document.getElementById(temp).innerHTML = turn;
    }else{
        while(true){
            temp = Math.floor(Math.random() * 9);
            
            if (!boardValue[temp]){
                boardValue[temp] = turn
                document.getElementById(temp).innerHTML = turn;
                if(checkWinning(boardValue, turn)){
                    win = 1
                }
                return
            }
        }
    }
}

export function smartCPU(boardValue){
    let count = 0
    let temp = []
    for(let i=0;i<9;i++){
        if(!boardValue[i]){
            count+=1
            temp.push(i)
        }
    }

    let bestMove = temp[0]
    let bestScore = -Infinity
    let score

    temp.forEach(element => {
        turn = 'O'
        boardValue[element] = turn
        score = minimax(count, 0, boardValue, false)
        if(score>bestScore){
            bestScore = score
            bestMove = element
        }
        boardValue[element] = null
    });
    turn = 'O'

    return bestMove
}

function minimax(index, depth, boardValue, maximaze){

    if(checkWinning(boardValue, turn)){
        if(turn == 'O'){
            return 10-depth
        }
        return -10+depth
    }

    if(index==0){
        return 0
    }

    if(maximaze){
        let bestScore = -Infinity
        for(let i=0;i<9;i++){
            if(!boardValue[i]){
                turn ='O'
                boardValue[i] = 'O'
                let score = minimax(index-1, depth+1, boardValue, false)
                bestScore = Math.max(bestScore, score)
                boardValue[i] = null
            }
        }
        return bestScore
    }
    let bestScore = Infinity
    for(let i=0;i<9;i++){
        if(!boardValue[i]){
            turn = 'X'
            boardValue[i] = 'X'
            let score = minimax(index-1, depth+1, boardValue, true)
            bestScore = Math.min(bestScore, score)
            boardValue[i] = null
        }
    }
    return bestScore
}
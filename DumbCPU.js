import {
    checkWinning,
    winningTurn
} from './Logic.js'

let cpuDumb = 0

export function dumbCPU(boardValue){
    let temp
    if(cpuDumb){
        while(true){
            temp = Math.floor(Math.random() * 9);
            
            if (!boardValue[temp]){
                boardValue[temp] = 'X'
                document.getElementById(temp).innerHTML = 'X';
                if(checkWinning(boardValue, 'X')){
                    win = 1
                }
                return
            }
        }
    }else{
        temp = smartCPU(boardValue)
        boardValue[temp] = 'X'
        document.getElementById(temp).innerHTML = 'X';
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
        boardValue[element] = 'X'
        score = minimax(count, boardValue, false)
        if(score>bestScore){
            bestScore = score
            bestMove = element
        }
        boardValue[element] = null
    });
    return bestMove
}

function minimax(i, boardValue, maximaze){
    if(checkWinning(boardValue, 'X')){
        return 1
    }
    
    if(i == 0){
        return 0
    }

    if(maximaze){
        let maxScore = -Infinity
        for(let i=0;i<9;i++){
            if(!boardValue[i]){
                boardValue[i] = 'X'
                maxScore = Math.max(maxScore, minimax(i-1, boardValue, false))
                boardValue[i] = null
            }
        }
        return maxScore
    }
    let minScore = Infinity
    for(let i=0;i<9;i++){
        if(!boardValue[i]){
            boardValue[i] = 'O'
            minScore = Math.min(minScore, minimax(i-1, boardValue, true))
            boardValue[i] = null
        }
    }
    return minScore

}
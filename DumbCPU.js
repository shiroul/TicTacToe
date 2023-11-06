export function dumbCPU(winningTurn, boardValue){
    let temp
    while(true){
        temp = Math.floor(Math.random() * 9 +1);
        console.log(temp)
        
        if (!boardValue[temp]){
            boardValue[temp] = 'X'
            document.getElementById(temp).innerHTML = 'X'
            console.log('KONTOL')
            return
        }
    }
}
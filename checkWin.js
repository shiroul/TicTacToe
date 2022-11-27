export class CheckWin{
    constructor(player){
        this.player = player;
    }

    checkWIn(assign) {
        if(assign[0] == player && assign[1] == player && assign[2] == player){
            return true;
        }
        if(assign[3] == player && assign[4] == player && assign[5] == player){
            return true;
        }
        if(assign[6] == player && assign[7] == player && assign[8] == player){
            return true;
        }
        if(assign[0] == player && assign[4] == player && assign[8] == player){
            return true;
        }
        if(assign[2] == player && assign[4] == player && assign[6] == player){
            return true;
        }
        console.log('not yet');
        return false;
    }
}
export class CheckWin{
    constructor(player){
        this.player = player;
    }

    checkWin(assign) {
        if(assign[0] == this.player && assign[1] == this.player && assign[2] == this.player){
            console.log('yeyeaysy')
            return true;
        }
        if(assign[3] == this.player && assign[4] == this.player && assign[5] == this.player){
            console.log('yeyeaysy')
            return true;
        }
        if(assign[6] == this.player && assign[7] == this.player && assign[8] == this.player){
            console.log('yeyeaysy')
            return true;
        }
        if(assign[0] == this.player && assign[4] == this.player && assign[8] == this.player){
            console.log('yeyeaysy')
            return true;
        }
        if(assign[2] == this.player && assign[4] == this.player && assign[6] == this.player){
            console.log('yeyeaysy')
            return true;
        }
        console.log(assign)
        console.log('lah')
        return false;
    }
}
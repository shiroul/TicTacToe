import {CheckWin} from './checkWin.js';

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");

const human = new CheckWin();
const cpu = new CheckWin();


const assign = new Array(9).fill(null);
var x = 0;


btn1.addEventListener("click", ()=>{
    if(assign[0]!=null){
        return;
    }
    assign[0] = 1;
    if(x == 0){
        btn1.value = "O";
        x = 1;
        human.checkWin(assign);
        return;
    }
    btn1.value = "X";
    x = 0;
    cpu.checkWin(assign);
})

btn2.addEventListener("click", ()=>{
    if(assign[1] != null){
        return;
    }
    assign[1] = 1;
    if(x == 0){
        btn2.value = "O";
        x = 1;
        human.checkWin(assign);
        return;
    }
    btn2.value = "X";
    x = 0;
    cpu.checkWin(assign);
})

btn3.addEventListener("click", ()=>{
    if(assign[2] != null){
        return;
    }
    assign[2] = 1;
    if(x == 0){
        btn3.value = "O";
        x = 1;
        human.checkWin(assign);
        return;
    }
    btn3.value = "X";
    x = 0;
    cpu.checkWin(assign);
})

btn4.addEventListener("click", ()=>{
    if(assign[3] != null){
        return;
    }
    assign[3] = 1;
    if(x == 0){
        btn4.value = "O";
        x = 1;
        human.checkWin(assign);
        return;
    }
    btn4.value = "X";
    x = 0;
    cpu.checkWin(assign);
})

btn5.addEventListener("click", ()=>{
    if(assign[4] != null){
        return;
    }
    assign[4] = 1;
    if(x == 0){
        btn5.value = "O";
        x = 1;
        human.checkWin(assign);
        return;
    }
    btn5.value = "X";
    x = 0;
    cpu.checkWin(assign);
})

btn6.addEventListener("click", ()=>{
    if(assign[5] != null){
        return;
    }
    assign[5] = 1;
    if(x == 0){
        btn6.value = "O";
        x = 1;
        human.checkWin(assign);
        return;
    }
    btn6.value = "X";
    x = 0;
    cpu.checkWin(assign);
})

btn7.addEventListener("click", ()=>{
    if(assign[6] != null){
        return;
    }
    assign[6] = 1;
    if(x == 0){
        btn7.value = "O";
        x = 1;
        human.checkWin(assign);
        return;
    }
    btn7.value = "X";
    x = 0;
    cpu.checkWin(assign);
})

btn8.addEventListener("click", ()=>{
    if(assign[7] != null){
        return;
    }
    assign[7] = 1;
    if(x == 0){
        btn8.value = "O";
        x = 1;
        human.checkWin(assign);
        return;
    }
    btn8.value = "X";
    x = 0;
    cpu.checkWin(assign);
})

btn9.addEventListener("click", ()=>{
    if(assign[8] != null){
        return;
    }
    assign[8] = 1;
    if(x == 0){
        btn9.value = "O";
        x = 1;
        human.checkWin(assign);
        return;
    }
    btn9.value = "X";
    x = 0;
    cpu.checkWin(assign);
})
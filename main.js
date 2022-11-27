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

const human = new CheckWin('O');
const cpu = new CheckWin('X');


const assign = new Array(9).fill(null);
var x = 0;


btn1.addEventListener("click", ()=>{
    if(assign[0]!=null){
        return;
    }
    if(x == 0){
        btn1.value = "O";
        x = 1;
        assign[0] = 'O';
        human.checkWin(assign);
        return;
    }
    btn1.value = "X";
    x = 0;
    assign[0] = 'X';
    cpu.checkWin(assign);
})

btn2.addEventListener("click", ()=>{
    if(assign[1] != null){
        return;
    }
    if(x == 0){
        btn2.value = "O";
        x = 1;
        assign[1] = 'O';
        human.checkWin(assign);
        return;
    }
    btn2.value = "X";
    x = 0;
    assign[1] = 'X';
    cpu.checkWin(assign);
})

btn3.addEventListener("click", ()=>{
    if(assign[2] != null){
        return;
    }
    if(x == 0){
        btn3.value = "O";
        x = 1;
        assign[2] = 'O';
        human.checkWin(assign);
        return;
    }
    btn3.value = "X";
    x = 0;
    assign[2] = 'X'
    cpu.checkWin(assign);
})

btn4.addEventListener("click", ()=>{
    if(assign[3] != null){
        return;
    }
    if(x == 0){
        btn4.value = "O";
        x = 1;
        assign[3] = 'O';
        human.checkWin(assign);
        return;
    }
    btn4.value = "X";
    x = 0;
    assign[3] = 'X';
    cpu.checkWin(assign);
})

btn5.addEventListener("click", ()=>{
    if(assign[4] != null){
        return;
    }
    if(x == 0){
        btn5.value = "O";
        x = 1;
        assign[4] = 'O';
        human.checkWin(assign);
        return;
    }
    btn5.value = "X";
    x = 0;
    assign[4] = 'X';
    cpu.checkWin(assign);
})

btn6.addEventListener("click", ()=>{
    if(assign[5] != null){
        return;
    }
    if(x == 0){
        btn6.value = "O";
        x = 1;
        assign[5] = 'O';
        human.checkWin(assign);
        return;
    }
    btn6.value = "X";
    x = 0;
    assign[5] = 'X';
    cpu.checkWin(assign);
})

btn7.addEventListener("click", ()=>{
    if(assign[6] != null){
        return;
    }
    if(x == 0){
        btn7.value = "O";
        x = 1;
        assign[6] = 'O';
        human.checkWin(assign);
        return;
    }
    btn7.value = "X";
    x = 0;
    assign[6] = 'X';
    cpu.checkWin(assign);
})

btn8.addEventListener("click", ()=>{
    if(assign[7] != null){
        return;
    }
    if(x == 0){
        btn8.value = "O";
        x = 1;
        assign[7] = 'O';
        human.checkWin(assign);
        return;
    }
    btn8.value = "X";
    x = 0;
    assign[7] = 'X';
    cpu.checkWin(assign);
})

btn9.addEventListener("click", ()=>{
    if(assign[8] != null){
        return;
    }
    if(x == 0){
        btn9.value = "O";
        x = 1;
        assign[8] = 'O';
        human.checkWin(assign);
        return;
    }
    btn9.value = "X";
    x = 0;
    assign[8] = 'O';
    cpu.checkWin(assign);
})
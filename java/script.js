let turn ="x";
let squares=[];
let filteredSquares=[];
let title =document.getElementById("title");
// start game
function onGame(id){
 let element= document.getElementById(id);

    if(element.innerHTML == "" && turn === "x"){
        element.innerHTML ="x";
        turn ="O"
        title.innerHTML ="O - Turn"
    }else if(element.innerHTML == "" && turn === "O"){
        element.innerHTML ="O";
        turn ="x"
        title.innerHTML ="x - Turn"
    }
    win();
    isDrawn();
}
// win case
function win(){
    for (let i = 1; i < 10; i++) {
       squares[i]= document.getElementById(`item${i}`).innerHTML; 
    }
    
    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] !=""){
        end(1,2,3)
    }
    if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4] !=""){
        end(4,5,6)
    }
    if(squares[7] == squares[8] && squares[8] == squares[9] && squares[7] !=""){
        end(7,8,9)
    }
    if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] !=""){
        end(1,4,7)
    }
    if(squares[2] == squares[5] && squares[5] == squares[8] && squares[2] !=""){
        end(2,5,8)
    }
    if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3] !=""){
        end(3,6,9)
    }
    if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1] !=""){
        end(1,5,9)
    }
    if(squares[3] == squares[5] && squares[5] == squares[7] && squares[3] !=""){
        end(3,5,7)
    }
}
// end game
function end(num1,num2,num3){
    document.getElementById(`item${num1}`).style.background ="#3fb574";
    document.getElementById(`item${num2}`).style.background ="#3fb574";
    document.getElementById(`item${num3}`).style.background ="#3fb574";
    title.innerHTML=`congratulaion ${squares[num1]} is winner`
    setInterval(function(){title.innerHTML =" loading new game ... "},1500)
    setTimeout(function(){location.reload()},2000)
}
function isDrawn(){
    let filteredSquares = squares.filter((age) => age != "")
    if(filteredSquares.length == 9){
        title.innerHTML=`OOPS !! Game is drawn`
        setInterval(function(){title.innerHTML =" loading new game ... "},1500)
        setTimeout(function(){location.reload()},2000)
    }
}
// win and draw call back functions win function comes first then isDrawn function
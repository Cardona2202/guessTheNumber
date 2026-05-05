const statuss=document.getElementById("Status");
const attempts=document.getElementById("attempts");
const inputs=document.getElementById("input");
const submist=document.getElementById("submit");
const rst=document.getElementById("reset");



let numberF = " ";
let lives = 6;
let arryans = [];
let statis=[];
let gameOver = false;

        numberF= Math.floor(Math.random()*100);
        console.log(numberF);
        
        submist.onclick = function () {
           
    if (gameOver || lives <= 0) {
        statuss.textContent = "Game is already finished";
        return;
    }

    let guess = Number(inputs.value);

    

    if (guess > 100 || guess < 1) {
        statuss.textContent = "NAG BABASA KABA 1-100 NGANI ";
        
    }else if (guess > numberF) {
        statis.push("Lower");
       
        statuss.textContent = "Lower";
        arryans.push(guess);
        lives--;
    }  
    else if (guess === null||guess === 0) {
        statuss.textContent = "You didnt Put any Number";
    } 
    else if (guess < numberF) {
        statis.push("Higher");
        statuss.textContent = "Higher";
        lives--;
        arryans.push(guess);
    } 
    
    else {
        statis.push("You Won");
        statuss.textContent = "You Won!";
        gameOver = true; 
        submist.disabled = true;
        arryans.push(guess);
    }

    attempts.textContent = lives;
     inputs.value=("");
    if (lives <= 0) {
        gameOver = true;
        statuss.textContent = `Game Over the number is ${numberF}`;
        submist.disabled = true;
    }

    for (let i = 1; i <= arryans.length; i++) {
        document.getElementById("ans" + i).textContent = arryans[i - 1];
        document.getElementById("Status" + i).textContent = statis[i - 1];
    }
};
        
    
    rst.onclick= function (){
        location.reload(true);
    }


        
  
 

    
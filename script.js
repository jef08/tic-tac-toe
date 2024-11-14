const initial_container = document.querySelector(".initial-container");
const player_player_page = document.querySelector(".player-player-page");
const player_computer_page = document.querySelector(".player-computer-page");
const player_bttn = document.querySelector(".player-bttn");
const computer_bttn = document.querySelector(".computer-bttn");
const start_bttn = document.querySelector(".start-bttn");
const x_wins = document.querySelector(".x-wins");
const o_wins = document.querySelector(".o-wins");
const tie = document.querySelector(".tie");


//code for start page and choosing (Player v Player) or (Player v Computer)//
initial_container.style.display = 'none';
player_player_page.style.display = 'none'; 
player_computer_page.style.display = 'none';
x_wins.style.display = 'none';
o_wins.style.display = 'none';
tie.style.display = 'none';

start_bttn.addEventListener("click", () => {
    initial_container.style.display = "flex";
    start_bttn.style.display = 'none';
})

player_bttn.addEventListener("click", () => {
    player_player_page.style.display = "flex";
    initial_container.style.display = 'none';
})

computer_bttn.addEventListener("click", () => {
    player_computer_page.style.display = "flex";
    initial_container.style.display = 'none';
})

//Code for Player v Player game//
        
let playerPlayerArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
let xArr = [];
let oArr = [];

const player_player_div = document.querySelectorAll(".player-player-div");

player_player_div.forEach((button) => {
    button.addEventListener("click", () => {
        
        if (xArr.length > oArr.length) {
            button.innerHTML = "◯"
            playerPlayerArr.splice(button.value, 1, "O");
            oArr.push("O");
            button.disabled = true;
        } else {
            button.innerHTML = "✕"
            playerPlayerArr.splice(button.value, 1, "X");
            xArr.push("X"); 
            button.disabled = true;
        }
        
        //logic for player v player winner//
        if (playerPlayerArr[0] === "X" && playerPlayerArr[1] === "X" && playerPlayerArr[2] === "X"){
            console.log("X wins!");
            player_player_page.style.display = 'none';
            x_wins.style.display = 'flex';
        } else if (playerPlayerArr[0] === "O" && playerPlayerArr[1] === "O" && playerPlayerArr[2] === "O"){
            console.log("O wins!");
            player_player_page.style.display = 'none';
            o_wins.style.display = 'flex';
        } else if (playerPlayerArr[0] === "X" && playerPlayerArr[3] === "X" && playerPlayerArr[6] === "X"){
            console.log("X wins!");
            player_player_page.style.display = 'none';
            x_wins.style.display = 'flex';
        } else if (playerPlayerArr[0] === "O" && playerPlayerArr[3] === "O" && playerPlayerArr[6] === "O"){
            console.log("O wins!");
            player_player_page.style.display = 'none';
            o_wins.style.display = 'flex';
        } else if (playerPlayerArr[0] === "X" && playerPlayerArr[4] === "X" && playerPlayerArr[8] === "X"){
            console.log("X wins!");
            player_player_page.style.display = 'none';
            x_wins.style.display = 'flex';
        } else if (playerPlayerArr[0] === "O" && playerPlayerArr[4] === "O" && playerPlayerArr[8] === "O"){
            console.log("O wins!");
            player_player_page.style.display = 'none';
            o_wins.style.display = 'flex';
        } else if (playerPlayerArr[1] === "X" && playerPlayerArr[4] === "X" && playerPlayerArr[7] === "X"){
            console.log("X wins!");
            player_player_page.style.display = 'none';
            x_wins.style.display = 'flex';
        } else if (playerPlayerArr[1] === "O" && playerPlayerArr[4] === "O" && playerPlayerArr[7] === "O"){
            console.log("O wins!");
            player_player_page.style.display = 'none';
            o_wins.style.display = 'flex';
        } else if (playerPlayerArr[2] === "X" && playerPlayerArr[5] === "X" && playerPlayerArr[8] === "X"){
            console.log("X wins!");
            player_player_page.style.display = 'none';
            x_wins.style.display = 'flex';
        } else if (playerPlayerArr[2] === "O" && playerPlayerArr[5] === "O" && playerPlayerArr[8] === "O"){
            console.log("O wins!");
            player_player_page.style.display = 'none';
            o_wins.style.display = 'flex';
        } else if (playerPlayerArr[2] === "X" && playerPlayerArr[4] === "X" && playerPlayerArr[6] === "X"){
            console.log("X wins!");
            player_player_page.style.display = 'none';
            x_wins.style.display = 'flex';
        } else if (playerPlayerArr[2] === "O" && playerPlayerArr[4] === "O" && playerPlayerArr[6] === "O"){
            console.log("O wins!");
            player_player_page.style.display = 'none';
            o_wins.style.display = 'flex';
        } else if (playerPlayerArr[3] === "X" && playerPlayerArr[4] === "X" && playerPlayerArr[5] === "X"){
            console.log("X wins!");
            player_player_page.style.display = 'none';
            x_wins.style.display = 'flex';
        } else if (playerPlayerArr[3] === "O" && playerPlayerArr[4] === "O" && playerPlayerArr[5] === "O"){
            console.log("O wins!");
            player_player_page.style.display = 'none';
            o_wins.style.display = 'flex';
        } else if (playerPlayerArr[6] === "X" && playerPlayerArr[7] === "X" && playerPlayerArr[8] === "X"){
            console.log("X wins!");
            player_player_page.style.display = 'none';
            x_wins.style.display = 'flex';
        } else if (playerPlayerArr[6] === "O" && playerPlayerArr[7] === "O" && playerPlayerArr[8] === "O"){
            console.log("O wins!");
            player_player_page.style.display = 'none';
            o_wins.style.display = 'flex';
        } else if (xArr.length === 5 && oArr.length === 4) {
            console.log("It's a tie!");
            player_player_page.style.display = 'none';
            tie.style.display = 'flex';
        }

    })
})


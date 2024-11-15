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
    initial_container.style.display = 'flex';
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


// "playeplayerArr" is also going to be used for the player-copmuter games//        
let playerPlayerArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
let xArr = [];
let oArr = [];

//Code for Player v Player game//
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

//code for player-computer games//
const player_computer_buttons = document.querySelectorAll(".player-computer-div");
const bttn_zero = document.querySelector("#bttn-zero");
const bttn_one = document.querySelector("#bttn-one");
const bttn_two = document.querySelector("#bttn-two");
const bttn_three = document.querySelector("#bttn-three");
const bttn_four = document.querySelector("#bttn-four");
const bttn_five = document.querySelector("#bttn-five");
const bttn_six = document.querySelector("#bttn-six");
const bttn_seven = document.querySelector("#bttn-seven");
const bttn_eight = document.querySelector("#bttn-eight");

player_computer_buttons.forEach((button) => {
    button.addEventListener("click", () => {
            //to display X and put into array//
            button.innerHTML = "✕"
            playerPlayerArr.splice(button.value, 1, "X");
        
            xArr.push("X"); 
            button.disabled = true;
            

            //code to get the computer choice, there was probably a better/more efficient way to do this//
            setTimeout(function getComputerChoice() {
                let randomChoice = Math.floor(Math.random()*playerPlayerArr.length);
                let choice = playerPlayerArr[randomChoice];
                console.log(choice)
                
                if (choice === "X") {
                    getWinner();
                    if (xArr.length === 5 && oArr.length === 4) {
                        return;
                    } else {
                     getComputerChoice();
                    }
                } else if (choice === "O") {
                    getWinner();
                    if (xArr.length === 5 && oArr.length === 4) {
                        return;
                    } else {
                     getComputerChoice();
                    }
                } else if (choice === "0") {    
                    playerPlayerArr.splice(choice, 1, "O");  
                            bttn_zero.innerHTML = "◯";
                            bttn_zero.disabled = true;
                            oArr.push("O");
                            console.log(playerPlayerArr);
                            getWinner();
                        } else if (choice === "1") {
                            playerPlayerArr.splice(choice, 1, "O");
                            bttn_one.innerHTML = "◯";
                            bttn_one.disabled = true;
                            oArr.push("O");
                            getWinner();
                            console.log(playerPlayerArr);
                        } else if (choice === "2") {
                            playerPlayerArr.splice(choice, 1, "O");
                            bttn_two.innerHTML = "◯";
                            bttn_two.disabled = true;
                            oArr.push("O");
                            console.log(playerPlayerArr);
                            getWinner();
                        } else if (choice === "3") {
                            playerPlayerArr.splice(choice, 1, "O");
                            bttn_three.innerHTML = "◯";
                            bttn_three.disabled = true;
                            oArr.push("O");
                            console.log(playerPlayerArr);
                            getWinner();
                        } else if (choice === "4") {
                            playerPlayerArr.splice(choice, 1, "O");
                            bttn_four.innerHTML = "◯";
                            bttn_four.disabled = true;
                            oArr.push("O");
                            console.log(playerPlayerArr);
                            getWinner();
                        } else if (choice === "5") {
                            playerPlayerArr.splice(choice, 1, "O");
                            bttn_five.innerHTML = "◯";
                            bttn_five.disabled = true;
                            oArr.push("O");
                            console.log(playerPlayerArr);
                            getWinner();
                        } else if (choice === "6") {
                            playerPlayerArr.splice(choice, 1, "O");
                            bttn_six.innerHTML = "◯";
                            bttn_six.disabled = true;
                            oArr.push("O");
                            console.log(playerPlayerArr);
                            getWinner();
                        } else if (choice === "7") {
                            playerPlayerArr.splice(choice, 1, "O");
                            bttn_seven.innerHTML = "◯";
                            bttn_seven.disabled = true;
                            oArr.push("O");
                            console.log(playerPlayerArr);
                            getWinner();
                        } else if (choice === "8") {
                            playerPlayerArr.splice(choice, 1, "O");
                            bttn_eight.innerHTML = "◯";
                            bttn_eight.disabled = true;
                            oArr.push("O");
                            console.log(playerPlayerArr);
                            getWinner();
                        }
                        return randomChoice;
                
            }, 1000)
    })
})


//Logic for player-comp winner (had to be put into function and called within getComputerChoice function//
function getWinner() {
        if (playerPlayerArr[0] === "X" && playerPlayerArr[1] === "X" && playerPlayerArr[2] === "X"){
                console.log("X wins!");
                player_computer_page.style.display = 'none';
                x_wins.style.display = 'flex';
            } else if (playerPlayerArr[0] === "O" && playerPlayerArr[1] === "O" && playerPlayerArr[2] === "O"){
                console.log("O wins!");
                player_computer_page.style.display = 'none';
                o_wins.style.display = 'flex';
            } else if (playerPlayerArr[0] === "X" && playerPlayerArr[3] === "X" && playerPlayerArr[6] === "X"){
                console.log("X wins!");
                player_computer_page.style.display = 'none';
                x_wins.style.display = 'flex';
            } else if (playerPlayerArr[0] === "O" && playerPlayerArr[3] === "O" && playerPlayerArr[6] === "O"){
                console.log("O wins!");
                player_computer_page.style.display = 'none';
                o_wins.style.display = 'flex';
            } else if (playerPlayerArr[0] === "X" && playerPlayerArr[4] === "X" && playerPlayerArr[8] === "X"){
                console.log("X wins!");
                player_computer_page.style.display = 'none';
                x_wins.style.display = 'flex';
            } else if (playerPlayerArr[0] === "O" && playerPlayerArr[4] === "O" && playerPlayerArr[8] === "O"){
                console.log("O wins!");
                player_computer_page.style.display = 'none';
                o_wins.style.display = 'flex';
            } else if (playerPlayerArr[1] === "X" && playerPlayerArr[4] === "X" && playerPlayerArr[7] === "X"){
                console.log("X wins!");
                player_computer_page.style.display = 'none';
                x_wins.style.display = 'flex';
            } else if (playerPlayerArr[1] === "O" && playerPlayerArr[4] === "O" && playerPlayerArr[7] === "O"){
                console.log("O wins!");
                player_computer_page.style.display = 'none';
                o_wins.style.display = 'flex';
            } else if (playerPlayerArr[2] === "X" && playerPlayerArr[5] === "X" && playerPlayerArr[8] === "X"){
                console.log("X wins!");
                player_computer_page.style.display = 'none';
                x_wins.style.display = 'flex';
            } else if (playerPlayerArr[2] === "O" && playerPlayerArr[5] === "O" && playerPlayerArr[8] === "O"){
                console.log("O wins!");
                player_computer_page.style.display = 'none';
                o_wins.style.display = 'flex';
            } else if (playerPlayerArr[2] === "X" && playerPlayerArr[4] === "X" && playerPlayerArr[6] === "X"){
                console.log("X wins!");
                player_computer_page.style.display = 'none';
                x_wins.style.display = 'flex';
            } else if (playerPlayerArr[2] === "O" && playerPlayerArr[4] === "O" && playerPlayerArr[6] === "O"){
                console.log("O wins!");
                player_computer_page.style.display = 'none';
                o_wins.style.display = 'flex';
            } else if (playerPlayerArr[3] === "X" && playerPlayerArr[4] === "X" && playerPlayerArr[5] === "X"){
                console.log("X wins!");
                player_computer_page.style.display = 'none';
                x_wins.style.display = 'flex';
            } else if (playerPlayerArr[3] === "O" && playerPlayerArr[4] === "O" && playerPlayerArr[5] === "O"){
                console.log("O wins!");
                player_computer_page.style.display = 'none';
                o_wins.style.display = 'flex';
            } else if (playerPlayerArr[6] === "X" && playerPlayerArr[7] === "X" && playerPlayerArr[8] === "X"){
                console.log("X wins!");
                player_computer_page.style.display = 'none';
                x_wins.style.display = 'flex';
            } else if (playerPlayerArr[6] === "O" && playerPlayerArr[7] === "O" && playerPlayerArr[8] === "O"){
                console.log("O wins!");
                player_computer_page.style.display = 'none';
                o_wins.style.display = 'flex';
            } else if (xArr.length === 5 && oArr.length === 4) {
                console.log("It's a tie!");
                player_computer_page.style.display = 'none';
                tie.style.display = 'flex';
            }
        }

//One thing I'd like to fix is that in player-computer games, if O wins, it goes directly to the// 
//winner announcement instead of showing the last, winning move that O makes//
//This is something I'd like to change in the future but at that point I'd probably do the whole thing over//
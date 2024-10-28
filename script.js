const initial_container = document.querySelector(".initial-container");
const player_player_page = document.querySelector(".player-player-page");
const player_computer_page = document.querySelector(".player-computer-page");
const player_bttn = document.querySelector(".player-bttn");
const computer_bttn = document.querySelector(".computer-bttn");
const start_bttn = document.querySelector(".start-bttn");

initial_container.style.display = 'none';
player_player_page.style.display = 'none'; 
player_computer_page.style.display = 'none';

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
   
        

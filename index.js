"use strict";
// this the player one score Important this is the final score of player 1
const scoreEL = document.getElementById("score--0");
// this is the player 2 socre Important this is the final socre of player 2
const socre1El = document.getElementById("score--1");
// this is the image of the dice
const diceEl = document.querySelector(".dice");
// this is the btn for the new game
const btnNew = document.querySelector(".btn--new");
// this is the btn for roll the dice
const btnRoll = document.querySelector(".btn--roll");
// this the btn for the holding the dice
const btnhold = document.querySelector(".btn--hold");
// this is the current socre of player 0
const current0EL = document.getElementById("current--0");
// this is the current socre of the player 1
const current1EL = document.getElementById("current--1");
// seleitng the players
const player0EL = document.querySelector(".player--0");
const player1EL = document.querySelector(".player--1");
// Important this is the current socre to set zero
function currentScore0() {
  current0EL.textContent = 0;
  current1EL.textContent = 0;
}
// this is done to set the socre to zero
// Important this is the final socre
function socre0() {
  scoreEL.textContent = 0;
  socre1El.textContent = 0;
}
// calling this function at the start to set it zero
socre0();
// creatitng afunciton for siwtching the players
function switchPlayers() {
  // this is mandtorly need to be set overe here so when it hit one the score should be zero
  currentscore = 0;
  // this is to set the current socre at zero when it hit one
  document.getElementById(`current--${activePlayer}`).textContent =
    currentscore;
  // if the roll dice is 1 then we switch to the next player
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentscore;
  // Important
  // now we are using the toogel method
  // what is toogle toggle checks if the class is present or not
  // so now in this case as the class is present we remove the class from here which is player--acitve
  // bt it will aslo add if the class is not there
  player0EL.classList.toggle("player--active");
  // here as the class is not there it will add the class over here
  //  so here we have added the color changing property
  player1EL.classList.toggle("player--active");
}
// these are the final scores
let scores = [];
// this is to add the current score for the players
let currentscore = 0;
// this will hepls to know the active player
let activePlayer = 0;
// this i will indicate the game is win or not
let playing;

function init() {
  // this to hide the dice and display it only when the roll the dice is clicked
  diceEl.classList.add("hidden");
  // these are the final scores
  scores = [0, 0];
  // this is to add the current score for the players
  currentscore = 0;
  // this will hepls to know the active player
  activePlayer = 0;
  // this i will indicate the game is win or not
  playing = true;
}
init();

// topic
// this the btn roll
// this is for the rooling of the dice
btnRoll.addEventListener("click", function () {
  if (playing) {
    diceEl.classList.remove("hidden");
    // genreating the random for the dice roll
    const diceRandom = Math.trunc(Math.random() * 6) + 1;
    // console.info(diceRandom);
    // this to genreate the the image according to the random number
    diceEl.src = `dice-${diceRandom}.png`;
    // this to diplay the socre at the player 1
    if (diceRandom != 1) {
      // add dice to the current score
      // this to add the random numbers to the score
      currentscore += diceRandom;
      // this will display the addup score of the score with the random
      // current0EL.textContent = score; //ChangeLater
      document.getElementById(`current--${activePlayer}`).textContent =
        currentscore;
    } else {
      switchPlayers();
    }
  }
});
// topic
// this is btn hold
// now impenting the hold button functionalty
btnhold.addEventListener("click", function () {
  if (playing) {
    // 1 adding the current socre to the final score of the active player
    // now the below condtions says that when the socre array at psotion acitve plaeyr zero pressnholds then the score would be added to current player playing the game
    scores[activePlayer] += currentscore;
    // score[1]=score[1]+currentscore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2 check if the score is alteast 100
    // 3 switch toh the next player
    if (scores[activePlayer] >= 20) {
      // finsh the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    }
    // when the hold btn is clicked the switch player function is called
    else {
      // this is a fucntion made ti switch the players so when ever the esle block is exucted the the switchPlayers(); functiob us called
      switchPlayers();
    }
    // now the task is to stop the game when the game is won and the btn should not be working only  the new game bt should be working
  }
});
// topic
// this is to reset everything
btnNew.addEventListener("click", function () {
  diceEl.classList.add("hidden");
  socre0();
  currentScore0();
  switchPlayers();
  init();
  // finally removing the player-winner class
  player0EL.classList.remove("player--winner");
  player1EL.classList.remove("player--winner");
  // and adding the player acitve class back
  player0EL.classList.add("player--active");
  // here we dont have to add the plaeyr active class coz form start it dint have that
  player1EL.classList.remove("player--active");
});

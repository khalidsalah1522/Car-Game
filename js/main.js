const back = document.querySelector(".game");
const player = document.querySelector(".player-car");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const gameOverLayout = document.querySelector(".game-over");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const scoreText = document.querySelector(".score");

let carPosition = 50;
let gameOver = false;
let score = 0;
let height = back.getBoundingClientRect().height;
let width = back.getBoundingClientRect().width;

const handleSclore = () => {
  const setScore = setInterval(() => {
    ++score;
  }, 1000);
};
handleSclore();

gameOverLayout.querySelector("button").addEventListener("click", () => {
  document.querySelectorAll(".cars div").forEach((div) => {
    score = 0;
    div.style.animationName = "carMove";
    game();
    gameOverLayout.style.opacity = "0";
  });
});

const game = () => {
  let playerCar =
    (parseInt(window.getComputedStyle(player).getPropertyValue("left")) /
      width) *
    100;
  let car1 =
    (parseInt(window.getComputedStyle(one).getPropertyValue("top")) / height) *
    100;
  let car2 =
    (parseInt(window.getComputedStyle(two).getPropertyValue("top")) / height) *
    100;
  let car3 =
    (parseInt(window.getComputedStyle(three).getPropertyValue("top")) /
      height) *
    100;
  let car4 =
    (parseInt(window.getComputedStyle(four).getPropertyValue("top")) / height) *
    100;
  let car5 =
    (parseInt(window.getComputedStyle(five).getPropertyValue("top")) / height) *
    100;

  if (car1 > 70 && car1 < 90 && playerCar < 25) {
    gameOver = true;
  }
  if (car2 > 70 && car2 < 90 && playerCar === 25) {
    gameOver = true;
  }
  if (car3 > 70 && car3 < 90 && playerCar === 50) {
    gameOver = true;
  }
  if (car4 > 70 && car4 < 90 && playerCar === 75) {
    gameOver = true;
  }
  if (car5 > 70 && car5 < 90 && playerCar > 75) {
    gameOver = true;
  }
  if (gameOver) {
    document.querySelectorAll(".cars div").forEach((div) => {
      div.style.animationName = "a";
    });
    gameOverLayout.style.opacity = "1";
    scoreText.innerText = score;
    gameOver = false;
  } else {
    requestAnimationFrame(() => game());
  }
};
requestAnimationFrame(() => game());

const handleClick = (e) => {
  if (e.code === "ArrowRight") {
    carPosition += 25;
  }
  if (e.code === "ArrowLeft") {
    carPosition -= 25;
  }
  if (e.currentTarget.className === "right") {
    carPosition += 25;
  }
  if (e.currentTarget.className === "left") {
    carPosition -= 25;
  }
  handlePosition();
  player.style.left = `${carPosition}%`;
  player.style.transform = `translateX(-${carPosition}%)`;
};

const handlePosition = () => {
  if (carPosition >= 100) {
    carPosition = 100;
  }
  if (carPosition <= 0) {
    carPosition = 0;
  }
};

left.addEventListener("click", handleClick);
right.addEventListener("click", handleClick);
window.addEventListener("keydown", handleClick);

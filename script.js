const check = document.querySelector(".check");
let random = Math.floor(Math.random() * 21);
let score = 20;
let highscore=0;
// When user clicks on check Button

check.addEventListener("click", () => {
  let guess = document.querySelector(".guess").value;
  console.log(guess, random);

  // When user type no number

  if (!guess) {
    let message = (document.querySelector(".message").textContent =
      "⛔️ No number typed");

    //When user type correct number
  } else if (random == guess) {
    let message = (document.querySelector(".message").textContent =
      "✅ Right number");
    let body = document.querySelector("body");
    body.style.backgroundColor = "#60b347";
    if(score > highscore){
      highscore = score;
document.querySelector(".highscore").textContent = score;}

    // When user typed a number lesser than the acctual number
  } else if (random > guess) {
    let message = (document.querySelector(".message").textContent =
      "Too small number");
    score--;
    document.querySelector(".score").textContent = score;

    // When user types a number greater than the actual number
  } else if (random < guess) {
    let message = (document.querySelector(".message").textContent =
      "Too large number");
    score--;
    document.querySelector(".score").textContent = score;
  }
});

// When user clicks on again btn

let again = document.querySelector(".again");
again.addEventListener("click", () => {
  let body = document.querySelector("body");
  body.style.backgroundColor = "#222";
  score = 20;
  random = Math.floor(Math.random() * 21);
  document.querySelector(".score").textContent = score;
  let message = (document.querySelector(".message").textContent =
    "Start guessing...");
  document.querySelector(".guess").value = "";
});
const browserButton = document.querySelector(".browserButton");
browserButton.addEventListener("click", function () {
  let browser = prompt("Browser");

  if (browser == "Edge") {
    console.log("you've got the edge!");
  } else if (
    browser == "Chrome" ||
    browser == "Firefox" ||
    browser == "Opera"
  ) {
    console.log("We support those too!");
  } else {
    console.log("I hope your browser works out for you");
  }
});


const duckButton = document.getElementById("duckButton1")

duckButton.addEventListener("mouseenter", () => {
  duckButton.src = "../img/Duck02.svg";
});

duckButton.addEventListener("mouseleave", () => {
  duckButton.src = "../img/Duck01.svg"
});
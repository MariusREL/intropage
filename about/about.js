// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;

//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay we support these browsers too");
//     break;

//   default:
//     alert("We hope that this page looks ok!");
// }

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

// let a = +prompt("a?", "FIll out a number here");

// if (a == 0) {
//   alert(0);
// }
// if (a == 1) {
//   alert(1);
// }

// if (a == 2 || a == 3) {
//   alert("2,3");
// }


const birthYear = 1948;
const thisYear = 1965;
const firstName = "Carlos";
const lastName = "Stevenson";
const fullName = firstName + " " + lastName;
const age = (thisYear - birthYear)
const greeting = `Hello! My name is $(fullname) and i am $(age) years old. `

console.log(greeting);
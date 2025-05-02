// set it up so UserName and password can be either HeidiB and Mariuserdenkuleste or AndersB and Mariuserfet. also convert it to lowercase so it is case insensitive

let userName = ["heidiB", "AndersB"]
let password = "mariuserdenkuleste";

let logInButton = document.querySelector(".logInButton");

logInButton.addEventListener("click", function() {
    let userNameInput = prompt("Enter Your Username: ");

    if (userName.some(name => name.toLowerCase() === userNameInput.toLowerCase())) {
        let passWordInput = "";
        
        while (passWordInput !==password){
            passWordInput = prompt("What is your password?")
            if (passWordInput === null) {
                alert("login process cancelled")
                break
            }

            if (passWordInput.toLowerCase() === password.toLowerCase()){
                alert("Hell yeah you got in")
                break;
            }
            else {
                alert("Wrong password, try again")
            }
        }
    }
else {
        alert("Your username is not registered in the system")
    }
    } 
    
);






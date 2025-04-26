// Makes two images pop up beside the dopamine button when the user mouses over it

const button = document.getElementById('button');
const images = document.querySelectorAll('img.exc');
const toggleButton = document.getElementById("button");
const calcButton = document.getElementById("calcbutton")
const message = document.getElementById("footermessage")

button.addEventListener('mouseenter', () => {
    images.forEach(img => {
        img.classList.remove('hidden');
        img.classList.add('visible');
    });
});

button.addEventListener('mouseleave', () => {
    images.forEach(img => {
        img.classList.remove('visible');
        img.classList.add('hidden');
    });
});

function themeSwitcher() {
    document.body.classList.toggle("darkmode")
}
function handleButtonClick() {
    themeSwitcher();
    // Confetti burst
    confetti({
        particleCount: 300,
        spread: 70,
        origin: { y: 0.6 }
    });
    
}
toggleButton.addEventListener("click", handleButtonClick);


calcButton.addEventListener("click", function calculateSum() {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const operator = document.getElementById("operator").value;

    let result;

    switch (operator) {
        case "+":
            result = number1 + number2;
            
            break;
        case "-":
            result = number1 - number2;
            
            break;
        case "*":
            result = number1 * number2;
            console.log(result);
            break;
        
        case "/":
            if (number2 == 0) {
            
            }
            else {
                result = (number1 / number2);
                
            }
            break;
        }
document.getElementById("result").textContent = result;
});

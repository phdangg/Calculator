

const buttonContainer = document.querySelector('.button-container');

const buttonList = [
    [7,8,9,'DEL','AC'],
    [4,5,6,'×','÷'],
    [1,2,3,'+','-'],
    [0,'.','x10','Ans','=']
];
function createButton(){
    for(let i = 0;i<buttonList.length;i++){
        for(let j = 0;j<buttonList[0].length;j++){
            const squareButton = document.createElement('div');
            squareButton.className = 'squareButton';
            squareButton.textContent = buttonList[i][j];
            if (buttonList[i][j] == 'DEL' || buttonList[i][j] == 'AC'){
                squareButton.style.backgroundColor = '#3A64C1';
                squareButton.style.color = 'white';
            }
            buttonContainer.appendChild(squareButton);
        }
    }
}
createButton();


const allSquareButton = document.querySelectorAll('.squareButton');
const topScreen = document.querySelector('.top-screen');
const bottomScreen = document.querySelector('.bottom-screen');
let topScreenString = "";
let bottomScreenString = "";
let previousResult = "0"

function convertToValidExpression(topScreenString){
    let result = topScreenString;
    result = topScreenString.replace('×','*');
    result = result.replace('Ans',previousResult);
    result = result.replace('÷','/');
    previousResult = result;
    return result;
}
function printResult(topScreenString){
    const expression = convertToValidExpression(topScreenString);
    try {
        const result = math.evaluate(expression);
        bottomScreen.textContent = result;
    } catch(error){
        topScreen.textContent = error.message;
    }
}
function clearScreen(){
    topScreen.textContent = "";
    bottomScreen.textContent = "";
    bottomScreenString = "";
    topScreenString = "";
}

allSquareButton.forEach(squareButton => {
    squareButton.addEventListener('click',()=>{
        switch(squareButton.textContent){
            case 'AC':
                clearScreen()
                return;
            case 'DEL':
                topScreenString = topScreen.textContent;
                topScreenString = topScreenString.substring(0,topScreenString.length-1)
                topScreen.textContent = topScreenString;
                return;
            case '=':
                printResult(topScreenString);
                return;
            case 'x10': // not available           
            default:
                break;
        };
        if (bottomScreen.textContent) /*is not a empty string*/{
            clearScreen();
        }
        topScreenString += squareButton.textContent;
        topScreen.textContent = topScreenString;
    });
});

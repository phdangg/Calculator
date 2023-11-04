
const buttonContainer = document.querySelector('.button-container');

const buttonList = [
    [7,8,9,'DEL','AC'],
    [4,5,6,'X','/'],
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


function printResult(topScreenString){

}

allSquareButton.forEach(squareButton => {
    squareButton.addEventListener('click',()=>{
        switch(squareButton.textContent){
            case 'AC':
                topScreen.textContent = "";
                topScreenString = "";
                return;
            case 'DEL':
                topScreenString = topScreen.textContent;
                topScreenString = topScreenString.substring(0,topScreenString.length-1)
                topScreen.textContent = topScreenString;
                return;
            case '=':
                printResult(topScreenString);
                return;
            case 'x10':
            case 'Ans':
            default:
                break;
        };
        topScreenString += squareButton.textContent;
        topScreen.textContent = topScreenString;
    });
});

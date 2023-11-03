
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
            if (buttonList[i][j] == 'DEL' || buttonList[i][j] == 'AC')
                squareButton.style.backgroundColor = '#3A64C1';
            buttonContainer.appendChild(squareButton);
        }
    }
}

createButton();
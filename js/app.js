let currentScore = 0;
let currentProblem = 1;
let operatorType = '';

function selectProblemType(event) {

    operatorType=event.target.innerText;

    if(operatorType=='Addition') {
        operatorType = '+'
    } else if (operatorType=='Subtraction') {
        operatorType = '-'
    } else if (operatorType=='Multiplication') {
        operatorType = '*'
    } else if (operatorType=='Division') {
        operatorType = '/'
    };
    correctAnswer = generateExpression(operatorType);
    showProblems();
    //return operatorType;
}
/**
 * Utility function to generate a random number based on max
 * @param {number} max
 */
function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
/**
 * Utility function to shuffle the items in an array
 * @param {object} arr
 */
function shuffleArray(arr) {
    return arr.sort(function (a, b) { return Math.random() - 0.5 })
  }

function updateProblemNumber() {
    currentProblem++;
    document.querySelector('.currentProblem').innerText = currentProblem;
    if (currentProblem==10) {
        showStartMenu();
    };
}
function updateScore() {
    currentScore++
    document.querySelector('.currentScore').innerText = currentScore;
}

function selectAnswer(event) {
    const li = event.target;
    if (event.target.innerText == correctAnswer) {
        updateProblemNumber();
        updateScore();
        correctAnswer = generateExpression(operatorType);
    } else {
        updateProblemNumber();
        correctAnswer = generateExpression(operatorType);
    }
}

function endOfQuiz() {
    const hideHeader = document.querySelector('header p');
    hideHeader.classList.add('hidden');
    const hideProblem = document.querySelector('main div');
    hideProblem.classList.add('hidden');
    const hideAnswers = document.getElementById('answers');
    hideAnswers.classList.add('hidden');

}
    
function generateExpression(operatorType) {
let expressionProblem = document.querySelector(".expression");
let firstNum = getRandomNumber(10);
let secondNum = getRandomNumber(10);
expressionProblem.innerText = `${firstNum} ${operatorType} ${secondNum}`

let correctAnswer = eval(firstNum + operatorType + secondNum);
let answerArray =[correctAnswer,getRandomNumber(82), getRandomNumber(82),getRandomNumber(82)];
answerArray = shuffleArray(answerArray);

let answerList=document.querySelectorAll('#answers li')   

answerList.forEach((answer, index) => {  

    return answer.innerText = answerArray[index];
})
return correctAnswer;
}
function showStartMenu() {
    //make sure problems are hidden
    //make sure start menu is available
    const hideHeader = document.querySelector('header p');
    hideHeader.classList.add('hidden');
    const hideProblem = document.querySelector('main div');
    hideProblem.classList.add('hidden');
    const hideAnswers = document.getElementById('answers');
    hideAnswers.classList.add('hidden');

    const showChoiceInstructionsHeader = document.getElementById('selectProblemTypesHeader')
    showChoiceInstructionsHeader.classList.remove('hidden');

    const showProblemTypes = document.getElementById('listOfAllTypes')    
    showProblemTypes.classList.remove('hidden')
}

function showProblems() {
    //make sure start menu is hidden
    //make sure problems are available
    const hideHeader = document.querySelector('header p.show-hide');
    hideHeader.classList.remove('hidden');
    const hideProblem = document.querySelector('main div');
    hideProblem.classList.remove('hidden');
    const hideAnswers = document.getElementById('answers');
    hideAnswers.classList.remove('hidden');

    const showChoiceInstructionsHeader = document.getElementById('selectProblemTypesHeader')
    const showProblemTypes = document.getElementById('listOfAllTypes')
    showChoiceInstructionsHeader.classList.add('hidden');
    showProblemTypes.classList.add('hidden')
}
/*
start button goes to beginning of quiz

start over resets to beginning
    ask user to select problem type
    then begin quiz (start button)

end of quiz hides stuff and shows start over button
*/
function startOver(event) {
    /* if button text = Start, then start quiz

    if button text = start over, show selection screen
    
    
    const hideHeader = document.querySelector('header p');
    hideHeader.classList.remove('hidden');
    const hideProblem = document.querySelector('main div');
    hideProblem.classList.remove('hidden');
    const hideAnswers = document.getElementById('answers');
    hideAnswers.classList.remove('hidden');
    */
    showStartMenu();
    currentProblem=1;
    currentScore=0;
    document.querySelector('.currentScore').innerText = currentScore;
    document.querySelector('.currentProblem').innerText = currentProblem;
    correctAnswer = generateExpression(operatorType);
}
document.addEventListener('DOMContentLoaded', () => {

    //correctAnswer = generateExpression();
    showStartMenu();
    //start over button
    const answersListener = document.getElementById('answers')
    answersListener.addEventListener('click', selectAnswer)

    //select problem type button
    const operandListener = document.getElementById('selectProblemTypes')
    operandListener.addEventListener('click', selectProblemType)



    document.getElementById('btnStartOver').addEventListener('click',startOver)
    
    
})


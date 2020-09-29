

var buttonRock, buttonPaper, buttonScissors;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

function buttonClicked(buttonRock, buttonPaper, buttonScissors) {
  clearMessages();
  console.log(buttonPaper + ' został kliknięty');
  console.log(buttonRock + ' został kliknięty');
  console.log(buttonScissors + ' został kliknięty');
}

var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove;
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'nożyce';
  } else if (argMoveId == 3) {
    return 'papier';
  } else {
    printMessage('Nie znam tego ruchu ' + argMoveId + '. Zakładam, że chodziło o "kamień", "nożyce" lub "papier".');
    return 'niewiadomo-co';
  }
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyczki') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}


playerMove = argButtonName;
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);

buttonRock.addEventListener('click', function(){ 
  buttonClicked('kamień')
});
buttonPaper.addEventListener('click', function(){
   buttonClicked('papier')
 });
 buttonScissors.addEventListener('click', function(){ 
   buttonClicked('nożyce')
  });
 const buttonRock = document.getElementById('button-rock'),
      buttonPaper = document.getElementById('button-paper'),
   buttonScissors = document.getElementById('button-scissors')

//var buttonRock, buttonPaper, buttonScissors;
//buttonRock = document.getElementById('button-rock');
//buttonPaper = document.getElementById('button-paper');
//buttonScissors = document.getElementById('button-scissors');

function buttonClicked (playerMove) {
  clearMessages();
  console.log(playerMove + ' został kliknięty');
}
  //function buttonClicked(buttonRock, buttonPaper, buttonScissors) {
  //clearMessages();
  //console.log(buttonPaper + ' został kliknięty');
  //console.log(buttonRock + ' został kliknięty');
  //console.log(buttonScissors + ' został kliknięty');

  function playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce') {
    console.log('wpisana odpowiedż to: ' + playerInput);

    if (playerInput == 1) {
      playerMove = 'kamień';
    } else if (playerInput == 2) {
      playerMove = 'nożyce';
    } else if (playerInput == 3) {
      playerMove = 'papier';
    } else {
      printMessage('Nie znam tego ruchu' + playerInput + '. Zakładam, że chodziło o "kamień", "nożyce" lub "papier".');
      playerMove 'niewiadomo-co'; 
    }
  }
  
//var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove;
//function getMoveName(argMoveId) {
  //console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  //if (argMoveId == 1) {
    //return 'kamień';
 // } else if (argMoveId == 2) {
   // return 'nożyce';
  //} else if (argMoveId == 3) {
    //return 'papier';
  //} else {
    //printMessage('Nie znam tego ruchu ' + argMoveId + '. Zakładam, że chodziło o "kamień", "nożyce" lub "papier".');
    //return 'niewiadomo-co';
  //}
//}

function displayResult(playerMove, computerMove) {
  console.log('wywołano funkcje displayResult z argumentami: ' + playerMove + ', ' + computerMove);

  if (playerMove == 'papier' && computerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (playerMove == 'kamień' && computerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else if (playerMove == 'nożyce' && computerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (playerMove == computerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
}

//function displayResult(argPlayerMove, argComputerMove) {
  //console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  //if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    //printMessage('Wygrywasz!');
  //} else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyczki') {
    //printMessage('Wygrywasz!');
  //} else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    //printMessage('Wygrywasz!');
  //} else if (argPlayerMove == argComputerMove) {
    //printMessage('Remis!');
  //} else {
    //printMessage('Przegrywasz :(');
  //}
  //printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
//}


playerInput = playerMove;
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
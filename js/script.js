    // odnośniki do HTML
    // wybieranie butonów
    const buttonRock = document.querySelector('#button-rock');
    const buttonPaper = document.querySelector('#button-paper');
    const buttonScissors = document.querySelector('#button-scissors');
    // wyświetla wiadomość na stronie
    const output = document.querySelector('#message');
    // wyświetla wynik z HTML result
    const result = document.querySelector('#result');

    // zmienne globalne, beda liczyć wynik po każdej rundzie, 
    // muszą być zadeklarowane poza funkcją
    let playerScore = 0;
    let computerScore = 0;

    // nasłuchiwacze, czuwają czy na butonach nie pojawia się zmiana, kliknięcie
    buttonRock.addEventListener('click', function(){ 
     playGame('kamień')
    })
    buttonPaper.addEventListener('click', function(){
     playGame('papier')
     })
     buttonScissors.addEventListener('click', function(){ 
      playGame('nożyce')
      })

    // losowanie wyboru komputera
    function getComputerMove() {
      const randomNumber = Math.floor(Math.random() * 3 + 1);

      if (randomNumber == 1) return 'kamień';
      else if (randomNumber == 2) return 'papier';
      else if (randomNumber == 3) return 'nożyce';
    }

   // ustalenie zwyciezcy
   function getWinner(player, computer) {
    console.log('wywołano funkcje getWinner z argumentami: ' + player + ', ' + computer);
  
    if (player == 'papier' && computer == 'kamień') {
      playerScore = playerScore + 1;
      return 'Wygrywasz!';
    } else if (player == 'kamień' && computer == 'nożyce') {
      playerScore = playerScore + 1;
      return 'Wygrywasz!';
    } else if (player == 'nożyce' && computer == 'papier') {
      playerScore = playerScore + 1;
      return 'Wygrywasz!';
    } else if (player == computer) {
      return 'Remis!';
    } else {
      computerScore = computerScore +1;
      return 'Przegrywasz :(';
    }
    
  }

    // wypisz wiadomość'
    function printMessage(msg) {
      output.innerHTML = msg;
    }

    // wwyświetl wynik w html
    function renderResult() {
     result.innerHTML = playerScore + ' : ' + computerScore;
    }

    // start rundy
    function playGame(playerMove) {

       //ustalanie wyboru komputera
       const computerMove = getComputerMove();

       //ustalenie zwyciezcy
       const winner = getWinner(playerMove, computerMove);
       printMessage(winner);

       // pokaż wynik
       renderResult()
    }
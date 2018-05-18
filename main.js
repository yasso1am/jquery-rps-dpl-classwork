$(document).ready( function() {
var options = ['Rock', 'Paper', 'Scissors']
var userChoice = null
var compRoll
var gamesTotal = 0
var gamesWon = 0
var gamesLost = 0
var gamesTied = 0
var winPer = 0
var lossPer = 0
var tiePer = 0

//USER SELECTION//
$('.selection').on('click', function() {
  userChoice = $(this).data().type
  $('#userResult').text("You chose: " + '   ' + userChoice)
})

//COMPUTER SELECTION//
$('#playgame').on('click', function() {
  playGame(userChoice)
  })

//GAME PLAY//
  function playGame(userChoice){
    if (userChoice == null) {
      $('#gameResult').text("Please select an option before you play!")
      return null
    }
    gamesTotal++
    $('#gamesTotal').text(gamesTotal)
    compRoll = options[Math.floor(Math.random() * options.length)]
    $('#compResult').text("Computer chose: " + compRoll)
    evaluate()
    percent()
  }



//EVALUATE//
function evaluate() {
  // WIN //
  if ((userChoice === 'Paper' && compRoll === 'Rock') ||
    (userChoice === 'Rock' && compRoll === 'Scissors') ||
    (userChoice === 'Scissors' && compRoll === 'Paper')) {
      gamesWon++
      $('#gameResult').css({
          'color': 'green',
          'border': '2px solid green',
        })
      $('#gameResult').text("You Win!").fadeToggle(2000)
      $('#gamesWon').text(gamesWon)
  // TIE //
  } else if (compRoll === userChoice) {
      gamesTied++
        $('#gameResult').css({
          'color': 'blue',
          'border': '3px solid blue',
        })
        $('#gameResult').text("Tie Game!").fadeToggle(2000)
        $('#gamesTied').text(gamesTied)
  // LOSE //
} else { $('#gameResult').text("You lose!").fadeToggle(2000)
      gamesLost++
        $('#gameResult').css({
          'color': 'red',
          'border': '3px solid red',
        })
        $('#gamesLost').text(gamesLost)
}
}

//MATH//
function percent(){
  winPer = (gamesWon / gamesTotal * 100).toFixed(2)
  lossPer = (gamesLost / gamesTotal * 100).toFixed(2)
  tiePer = (gamesTied / gamesTotal * 100).toFixed(2)
  $('#winPer').text(winPer + '%')
  $('#lossPer').text(lossPer + '%')
  $('#tiePer').text(tiePer + '%')
}


})

  //   updateTotal()
  // })

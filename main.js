$(document).ready( function() {
var options = ['rock', 'paper', 'scissors']
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
  $('#userResult').text('You chose ' + userChoice)
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
    $('#compResult').text("Computer chose " + compRoll)
    evaluate()
    percent()
  }



//EVALUATE//
function evaluate() {
  if ((userChoice === 'paper' && compRoll === 'rock') ||
    (userChoice === 'rock' && compRoll === 'scissors') ||
    (userChoice === 'scissors' && compRoll === 'paper')) {
      gamesWon++
      $('#gameResult').text("You Win!")
      $('#gamesWon').text(gamesWon)
  } else if (compRoll === userChoice) {
      gamesTied++
        $('#gameResult').text("Tie Game!")
        $('#gamesTied').text(gamesTied)
  } else { $('#gameResult').text("You lose!")
      gamesLost++
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

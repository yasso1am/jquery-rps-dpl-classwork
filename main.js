$(document).ready( function() {
var options = ['Rock', 'Paper', 'Scissors']
var userChoice = null
var compRoll = null
var gamesTotal = 0
var gamesWon = 0
var gamesLost = 0
var gamesTied = 0
var winPer = 0
var lossPer = 0
var tiePer = 0

//FADE IN//
$('.selectAll').fadeIn(3000)

//USER SELECTION//
$('.selection').on('click', function() {
  userChoice = $(this).data().type
  $('#userResult').text("You chose: " + '   ' + userChoice)
})

//COMPUTER SELECTION//
$('#playgame').on('click', function() {
  playGame(userChoice)
  })


//RESET GAME//
  $('#reset').on('click', function() {
    userChoice
    compRoll
    gamesTotal = 0
    gamesWon = 0
    gamesLost = 0
    gamesTied = 0
    winPer = 0
    lossPer = 0
    tiePer = 0
    $('#gameResult').text(" ") // remove game results
    $('#userResult').text("You chose: ") // reset user choice
    $('#compResult').text("Computer chose: ") // reset comp roll
    $('#gamesTotal').text("Total games played: " + gamesTotal) // reset total
    $('#gamesLost').text("Games lost: " + gamesLost) // reset games lost
    $('#gamesLost').css('color', 'white')
    $('#gamesWon').text("Games won: " + gamesWon)
    $('#gamesWon').css('color', 'white')
    $('#gamesTied').text("Games tied: " + gamesTied) // reset ties
    $('#gamesTied').css('color', 'white')
    $('#winPer').text("Win Percentage: " + '  ' + winPer + '%')
    $('#lossPer').text("Loss Percentage: " + '  ' + lossPer + '%')
    $('#tiePer').text("Tie percentage: " + '  ' + tiePer + '%')
    $('.selectAll').css('display', 'none')
    $('.selectAll').fadeIn(3000)
    
  })



//GAME PLAY//
  function playGame(userChoice){
    if (userChoice == null) {
      $('#gameResult').text("Please select an option before you play!")
      return null
    }
    gamesTotal++
    $('#gamesTotal').text("Total games played: " + gamesTotal)
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
      $('#gamesWon').text("Games won: " + gamesWon)
      $('#gamesWon').css(
        {'color': 'green', 
        'font-weight': '900'})
  // TIE //
  } else if (compRoll === userChoice) {
      gamesTied++
        $('#gameResult').css({
          'color': 'blue',
          'border': '3px solid blue',
        })
        $('#gameResult').text("Tie Game!").fadeToggle(2000)
        $('#gamesTied').text("Games tied: " + gamesTied)
        $('#gamesTied').css(
          {'color': 'yellow', 
          'font-weight': '900'})
  // LOSE //
} else { $('#gameResult').text("You lose!").fadeToggle(2000)
$('#gamesLost').text("Games lost: " + gamesLost)
$('#gamesLost').css(
  {'color': 'red', 
  'font-weight': '900'})
      gamesLost++
        $('#gameResult').css({
          'color': 'red',
          'border': '3px solid red',
        })
}
}

//MATH//
function percent(){
  winPer = (gamesWon / gamesTotal * 100).toFixed(2)
  lossPer = (gamesLost / gamesTotal * 100).toFixed(2)
  tiePer = (gamesTied / gamesTotal * 100).toFixed(2)
  $('#winPer').text("Win Percentage: " + '  ' + winPer + '%')
  $('#lossPer').text("Loss Percentage: " + '  ' + lossPer + '%')
  $('#tiePer').text("Tie percentage: " + '  ' + tiePer + '%')
}


})

  //   updateTotal()
  // })

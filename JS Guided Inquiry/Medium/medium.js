//User input variable
var userInput = prompt("What's going on today?")


alert(userInput)

// Get uppercase and lowercase versions of user input
var userInputSHOUT = userInput.toUpperCase()
var userInputWhisper = userInput.toLowerCase()

console.log(userInput)

//Checking if user matches with uppercase or lowercase
if (userInput === userInputSHOUT) {
  console.log("The user is shouting.")
} else if (userInput === userInputWhisper) {
  console.log("The user is whispering.")
} else {
  console.log("The user is talking normally.")
}
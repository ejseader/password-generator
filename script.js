// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function showCharacters(characters) {
  password.innerText = characters;
}

function generatePassword(optionsObj) {
  var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '`', '~'];


  var characterChoices = [];
  var characterList = [];

  var randomGen = function(arr) {
    var randomSelection = characterChoices[Math.floor(Math.random() * characterChoices.length)];

    if (characterList.includes(randomSelection)) {
      return randomGen(arr);
    }

    return randomSelection;
  }

  if (optionsObj.lowercaseLetters) {
    characterChoices = characterChoices.concat(lowercaseLetters);
  }

  if (optionsObj.uppercaseLetters) {
    characterChoices = characterChoices.concat(uppercaseLetters);
  }

  if (optionsObj.numbers) {
    characterChoices = characterChoices.concat(numbers);
  }

  if (optionsObj.specialCharacters) {
    characterChoices = characterChoices.concat(specialCharacters);
  }

  for (var i = 0; i < optionsObj.amount; i++) {
    var random = randomGen(characterChoices);

    characterList.push(random);
  }

  // var characterListFixed = String(characterList).replace(',', '');

  showCharacters(characterList.join(''));

}

function passwordQuestions() {
  var passwordLength = prompt('Please choose a password length between 8 and 128 characters.');
  var lowercase = confirm('Would you like to include lowercase letters? Yes (Okay) or No (Cancel)?');
  var uppercase = confirm('Would you like to include uppercase letters?');
  var numeric = confirm('Would you like to include numbers?');
  var special = confirm('Would you like to include special characters?');
  var parsedAmount = parseInt(passwordLength);

  var options = {
    amount: parsedAmount,
    lowercaseLetters: lowercase,
    uppercaseLetters: uppercase,
    numbers: numeric,
    specialCharacters: special
  };

  generatePassword(options);
}

// Write password to the #password input
function writePassword() {
  var password = passwordQuestions();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordQuestions);

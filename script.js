// Assignment code here
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArray= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
 var symbolsArray = ["*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "@", "[", "]", "^", "`", "_", "{", "}","!", "~", "?", "'", "\"", "#", "$", "%", "&", ",", "(", ")" ];



var characterIterator = function () {
  
    var passResults = [];
 
    var optionsChosen = chooseCharacters();
  
    if (optionsChosen === null) {
    return;
  }
  for (var i = 0; i < optionsChosen.passLength; i++) {
    var indexEachCharacter = Math.floor(Math.random()*optionsChosen.charactersArray.length);
    var passwordCharacters = optionsChosen.charactersArray[indexEachCharacter];
    passResults.push(passwordCharacters);
  }
  return passResults = passResults.join("");
};

var generateBtn = document.querySelector("#generate");


var writePassword = function () {
    var passLength = window.prompt("How many characters would you like your password to contain?");
    passLength = parseInt(passLength);
    
    if (passLength < 8 || passLength > 128) {
      window.alert("Please have your password contain 8 - 128 characters!");
      return writePassword();
    }

    if (isNaN(passLength)) {
      window.alert("Please select a number value.")
      return writePassword();
    }
    return passLength;
};



var chooseCharacters = function () {
  var passLength = writePassword();
  var charactersArray = [];
 
  var promptChooseUppercase = window.confirm("Would you like to use uppercase letters?");
  
  if (promptChooseUppercase) {
    charactersArray= charactersArray.concat(uppercaseArray);
    };
 
 var promptChooseLowercase = window.confirm("Would you like to use lowercase letters?");
  if (promptChooseLowercase) {
    charactersArray= charactersArray.concat(lowercaseArray);
  };

  var promptChooseNumbers = window.confirm("Would you like to use numbers?");
  if (promptChooseNumbers) {
    charactersArray = charactersArray.concat(numbersArray);
  };

  var promptChooseSymbols = window.confirm("Would you like to use symbols?");
  if (promptChooseSymbols) {
    charactersArray = charactersArray.concat(symbolsArray);
  };

  if (charactersArray.length === 0) {
  window.alert("PLease pick a type of character to create your password. Click 'Generate Password' to try again!")
  return;
  }
  var returnObj = {passLength, charactersArray}
  return returnObj;
};

function generatePassword() {
  var password = characterIterator();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

generateBtn.addEventListener("click", generatePassword);
// Assignment code here
var buttonPush = function() {
  
}

//generator functions
//random lowercase
function getRandomLC() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97); 
}

//random uppercase
function getRandomUC() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//random number
function getRandomNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

//random special character
function getRandomSym() {
  var symbols = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var randomSym = Math.floor(Math.random() * symbols.length);
  return symbols[randomSym];
}

//prompt functions
//Password Length
function passwordLengthPrompt() {
  var passwordLength = 0;
  
  while (passwordLength < 8 || passwordLength > 128) {
    var lengthCheck = window.prompt("Choose a length of password between 8 and 128 characters");
    lengthCheck = parseInt(lengthCheck, 10);
    if (isNaN(lengthCheck)) {
      window.alert("Please enter a valid input");
    } else {
      passwordLength = lengthCheck;
    }
  }
  return passwordLength;
}

//Password  character types
function passwordCharactersPrompt() {
  var atLeastOne = false

  while(!atLeastOne) {
    var lowerCase = window.confirm("Should the password include lowercase letters?");
    var upperCase = window.confirm("Should the password contain uppercase letters?");
    var numericValue = window.confirm("Should the password contain numeric values?");
    var specialChar = window.confirm("Should the password contain special characters?");
    if(lowerCase === false && upperCase === false && numericValue === false && specialChar === false) {
      window.alert("At least one input must be validated, please try again.");
      atLeastOne = false;
    } else {
      atLeastOne = true;
    }
  }

}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


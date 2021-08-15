// Assignment code here
var charactersArr = [];

var passwordLength = 0;

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
  var symbols = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?",
   "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "\"", "\\"];
  var randomSym = Math.floor(Math.random() * symbols.length);
  return symbols[randomSym]; 
}

//prompt functions
//Password Length
function passwordLengthPrompt() {
  passwordLength = 0;
  
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

  charactersArr = [lowerCase, upperCase, numericValue, specialChar];
  return charactersArr; 
}

function generatePassword() {
  passwordLengthPrompt();
  passwordCharactersPrompt();
  password = [];

  if (charactersArr[0]) {
    lowerCase = true;
  } else {
    lowerCase = false;
  }

  if (charactersArr[1]) {
    upperCase = true;
  } else {
    upperCase = false;
  }

  if (charactersArr[2]) {
    numericValue = true;
  } else {
    numericValue = false;
  }

  if (charactersArr[3]) {
    specialChar = true;
  } else {
    specialChar = false;
  }

  while (password.length < passwordLength) {

    var randomKey = Math.floor(Math.random() * 4) + 1;
    
    switch (randomKey) {
      case 1:
        if (lowerCase) {
          password.push(getRandomLC());
        } else {
          break;
        }
      case 2:
        if (upperCase) {
          password.push(getRandomUC());
        } else {
          break;
        }
      case 3:
        if (numericValue) {
          password.push(getRandomNum());
        } else {
          break;
        }
      case 4:
        if (specialChar) {
          password.push(getRandomSym());
        } else {
          break;
        }
      default:
        break;
    }
  }
  password = password.join("");
  return password;
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


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  function generatePassword(){
    // Add pool of characters to use for password
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var lowerCaseArray = lowerCase.split("");
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var upperCaseArray = lowerCase.split("");
    var specialChara = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    var specialCharaArray = lowerCase.split("");
    var numbers = "0123456789"
    var pool = [];
    // pool.push(lowerCaseArray);
    // spread operator - pool.push(...)
    var numberofCharas = parseInt(prompt("How many characters do you want your password to have?"));


  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

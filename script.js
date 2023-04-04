// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  function generatePassword(){
    // Add pool of characters to use for password
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var specialChara = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var numbers = "0123456789"
    var pool = "";
    var numberofCharas = parseInt(prompt("How many characters do you want your password to have?"));


  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

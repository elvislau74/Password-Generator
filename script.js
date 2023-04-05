// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  // Add pool of characters to use for password
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var lowerCaseArray = lowerCase.split("");
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var upperCaseArray = lowerCase.split("");
  var specialChara = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var specialCharaArray = lowerCase.split("");
  var numbers = "0123456789"
  var numbersArray = numbers.split("");
  var pool = [];
  var passwordGenerated = [];

  // spread operator - pool.push(...)
  var numberofCharas = parseInt(prompt("How many characters do you want your password to have?"));

  if (!numberofCharas){
    return window.alert("Password length must be provided as a number.");
  }

  //Click okay to confirm if you would like to include special characters
  var addSpecial = confirm("Would you like to include special characters?");
  if (addSpecial){
    pool.concat(specialCharaArray);
  }
  else {
    return;
  }
  //Click okay to confirm if you would like to include numeric characters
  var addNumeric = confirm("Would you like to include numeric characters?");
  if (addNumeric){
    pool.concat(numbersArray);
  }
  else {
    return;
  }
  //Click okay to confirm if you would like to include lowercase letters
  var addLower = confirm("Would you like to include lowercase characters?");
  if (addLower){
    pool.concat(lowerCaseArray);
  }
  else {
    return;
  }
  //Click okay to confirm if you would like to include uppercase letters
  var addUpper = confirm("Would you like to include uppercase characters?");
  if (addUpper){
    pool.concat(upperCaseArray);
  }
  else {
    return;
  }

  for (var i = 0; i < numberofCharas.length; i++){
    passwordGenerated.push(pool[Math.floor(Math.random() * pool.length)]);
  }

  // window.alert("Your password is " + passwordGenerated);

  return passwordGenerated;
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

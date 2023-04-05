// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  // Add pool of characters to use for password
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChara = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var numbers = "0123456789"
  var pool = [];
  var passwordGenerated = [];

  // spread operator - pool.push(...)
  var numberofCharas = parseInt(prompt("How many characters do you want your password to have?"));
  console.log(numberofCharas);
  if (!numberofCharas){
    return alert("Password length must be provided as a number.");
  }
  if (numberofCharas > 128){
    return alert("Please choose a number less than 128.")
  }
  if (numberofCharas < 8){
    return alert("Please choose a number more than 8.")
  }

  //Click okay to confirm if you would like to include special characters
  var addSpecial = confirm("Would you like to include special characters?");
  if (addSpecial){
    pool += specialChara;
  }
   
  //Click okay to confirm if you would like to include numeric characters
  var addNumeric = confirm("Would you like to include numeric characters?");
  if (addNumeric){
    pool += numbers;
  }
   
  //Click okay to confirm if you would like to include lowercase letters
  var addLower = confirm("Would you like to include lowercase characters?");
  if (addLower){
    pool += lowerCase;
  }
   
  //Click okay to confirm if you would like to include uppercase letters
  var addUpper = confirm("Would you like to include uppercase characters?");
  if (addUpper){
    pool += upperCase;
  }

  if (!addSpecial && !addNumeric && !addLower && !addUpper){
    return alert("You have to choose at least one type of character.")
  }
  
  console.log(pool, "message");
  for (var i = 0; i < numberofCharas; i++){
    passwordGenerated += pool[Math.floor(Math.random() * pool.length)];
  }

  // window.alert("Your password is " + passwordGenerated);
  console.log(passwordGenerated, "password");
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

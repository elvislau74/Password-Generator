// Assignment Code
var generateBtn = document.querySelector("#generate");

// function will take in user input to generate a password
function generatePassword(){
  // Add pool of characters in a string to use for password
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChara = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var numbers = "0123456789"
  
  // Empty pool array will have the above string variables added in after user input
  var pool = [];

  // Empty passwordGenerated array will hold a certain amount of random characters based on what the user inputs 
  var passwordGenerated = [];

  // numberofCharas will take in user input of how long they want their password to be
  var numberofCharas = parseInt(prompt("How many characters do you want your password to have?"));
  
  // If numberofCharas is not input as a number or is exited out of, an alert will pop up and code will not execute
  if (!numberofCharas){
    return alert("Password length must be provided as a number.");
  }

  // If numberofCharas is not within 8-128, an alert will pop up and the code will not execute
  if (numberofCharas > 128){
    return alert("Please choose a number less than 128.")
  }
  if (numberofCharas < 8){
    return alert("Please choose a number more than 8.")
  }

  // addSpecial, addNumeric, addLower and addUpper variables will take in user confirmation if they want to use each set of characters and add them to the pool array
  var addSpecial = confirm("Would you like to include special characters?");
  if (addSpecial){
    pool += specialChara;
  }
   
  var addNumeric = confirm("Would you like to include numeric characters?");
  if (addNumeric){
    pool += numbers;
  }
   
  var addLower = confirm("Would you like to include lowercase characters?");
  if (addLower){
    pool += lowerCase;
  }
   
  var addUpper = confirm("Would you like to include uppercase characters?");
  if (addUpper){
    pool += upperCase;
  }

  // If all of the confirmations are cancelled out of, an alert will pop up and code will not execute
  if (!addSpecial && !addNumeric && !addLower && !addUpper){
    return alert("You have to choose at least one type of character.")
  }

  // Will loop and add a random character from the pool array to the passwordGenerated array for the length of the password that the user input previously
  for (var i = 0; i < numberofCharas; i++){
    passwordGenerated += pool[Math.floor(Math.random() * pool.length)];
  }

  // The function generatePassword will return the value from the passwordGenerated array
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

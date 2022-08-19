// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordArray = [];
var characterLength = 8;
var lowerBool = false;
var upperBool = false;
var specialBool = false;
var numbersBool = false;

// arrays for each given character
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "="];
var numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


// 
function passwordChoice(){
    passwordArray = [];
    characterLength = window.prompt(
    "How long would you like your password to be? (Must Be Between 8-128 Characters)"
  );
  if (!isNaN(characterLength) && characterLength >= 8 && characterLength <= 128) {
    console.log("Valid Value");
  } else {
    window.prompt("Please enter a valid number.")
    return false;
  }
  if (confirm("Would you like lowercase letters in your password?")){
    passwordArray = passwordArray.concat(lowerCaseArray);
    lowerBool = true;
  }
  if (confirm("Would you like uppercase letters in your password?")){
    passwordArray = passwordArray.concat(upperCaseArray);
    upperBool = true;
  }
  if (confirm("Would you like special characters in your password?")){
    passwordArray = passwordArray.concat(specialCharArray);
    specialBool = true;
  }
  if (confirm("Would you like numbers in your password?")){
    passwordArray = passwordArray.concat(numbersArray);
    numbersBool = true;
  }
  console.log(passwordArray);
  console.log(lowerBool)
  console.log(upperBool)
  console.log(specialBool)
  console.log(numbersBool)
  return true;
} 



// Write password to the #password input
function writePassword() {
  var correctPrompts = passwordChoice();
  var passwordText = document.querySelector("#password")

  if(correctPrompts){
    var newPassword = generatePassword();
    if(!validatePassword(newPassword)){
      newPassword = generatePassword();
      console.log(newPassword);
    }
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

function validatePassword(password){
  var containsLower = false;
  var containsUpper = false;
  var containsSpecial = false;
  var containsNumbers = false;
  var validPassword = false;
  if (lowerBool){
    for(var i = 0; i < lowerCaseArray.length; i++){
      if(password.includes(lowerCaseArray[i])){
        containsLower = true;
        break;
      }
    }
  }
  if (upperBool){
    for(var i = 0; i < upperCaseArray.length; i++){
      if(password.includes(upperCaseArray[i])){
        containsUpper = true;
        break;
      }
    }
  }
  if (specialBool){
    for(var i = 0; i < specialCharArray.length; i++){
      if(password.includes(specialCharArray[i])){
        containsSpecial = true;
        break;
      }
    }
  }
  if (numbersBool){
    for(var i = 0; i < numbersArray.length; i++){
      if(password.includes(numbersArray[i])){
        containsNumbers = true;
        break;
      }
    }
  }
  if(lowerBool && containsLower){
    validPassword = true;
  } else{
    validPassword = false;
  }
  if(upperBool && containsUpper){
    validPassword = true;
  } else{
    validPassword = false;
  }
  if(specialBool && containsSpecial){
    validPassword = true;
  } else{
    validPassword = false;
  }
  if(numbersBool && containsNumbers){
    validPassword = true;
  } else{
    validPassword = false;
  }
  return validPassword;
}

function generatePassword(){
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordArray.length);
    password = password + passwordArray[randomIndex];
    console.log(password)
  }
  return password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



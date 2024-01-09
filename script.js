// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let characterLength = 8; // Default value, you can adjust it based on your preferences

  while (true) {
    characterLength = prompt("How many characters would you like?", characterLength);

    if (characterLength === null) {
      // User pressed Cancel, handle it accordingly (e.g., provide a default length)
      characterLength = 8; // Default value
      break;
    }

    if (characterLength >= 8 && characterLength <= 128) {
      break;
    } else {
      alert("Password length must be between 8 and 128 characters.");
    }
  }
  let uppercaseCharacters = confirm("Would you like Upper-Case characters to be included?");
  let lowercaseCharacters = confirm("Would you like lower-Case characters to be included?");
  let specialcaseCharacters = confirm("Would you like special characters to be included?");
  let numbers = confirm("Would you like numbers to be included?");

  while (!(uppercaseCharacters || lowercaseCharacters || specialcaseCharacters || numbers)) {
    alert("Please select at least one type of characters to be included in the password");
  
    // Prompt again for character types
    uppercaseCharacters = confirm("Would you like Upper-Case characters to be included?");
    lowercaseCharacters = confirm("Would you like lower-Case characters to be included?");
    specialcaseCharacters = confirm("Would you like special characters to be included?");
    numbers = confirm("Would you like numbers to be included?");
  } 

  return {
    characterLength: characterLength,
    includeUppercase: uppercaseCharacters,
    includeLowercase: lowercaseCharacters,
    includeSpecial: specialcaseCharacters,
    includeNumbers: numbers
  };
}


var allCharacters = []; //array to hold the names of all arrays
function buildArray(userInput, addArray) {
  if (userInput === true) {
    allCharacters = allCharacters.concat(addArray)
  }
}

var options = getPasswordOptions();

buildArray(options.includeUppercase, upperCasedCharacters);
buildArray(options.includeLowercase, lowerCasedCharacters);
buildArray(options.includeSpecial, specialCharacters);
buildArray(options.includeNumbers, numericCharacters);

console.log(allCharacters);


// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex]
}

//Function to generate password with user input
function generatePassword() {
  var passwordCharacterArray = [];
  for (var i = 0; i < options.characterLength; i++) {
    passwordCharacterArray.push(getRandom(allCharacters));
  }
  return passwordCharacterArray.join(''); // Return the generated password
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
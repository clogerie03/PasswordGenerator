var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// function to confirm the user's password options
function confirmPasswordPreferences() {
    // ask the user for password preferences (options)
    var passwordLength = parseInt(prompt("How many characters would you like your password to contain?"));
    var confirmLowerCase = confirm("Click 'ok' to include lowercase characters");
    var confirmUpperCase = confirm("Click 'ok' to include uppercase characters");
    var confirmSpecialCharacters = confirm("Click 'ok' to include special characters");
    var confirmNumericalCharacters = confirm("Click 'ok' to include numerical characters");

    // check if password length is entered in as a number
    if (isNaN(passwordLength) === true) {
        alert("Password length must be a number");
    }

    // check if password length is between 8 and 128 characters
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password must be between 8 and 128 characters");
    }

    // check if the user has at least one of the password requirements
    if (!confirmLowerCase || !confirmUpperCase || !confirmSpecialCharacters || !confirmNumericalCharacters) {
        alert("Password must contain at least one lowercase, uppercase, special, or numerical character");
    }

    // store password preferences as an object
    var passwordPreferences = {
        passwordLength: passwordLength,
        confirmLowerCase: confirmLowerCase,
        confirmUpperCase: confirmUpperCase,
        confirmSpecialCharacters: confirmSpecialCharacters,
        confirmNumericalCharacters: confirmNumericalCharacters
    }

    // return the password options
    return passwordPreferences;
}

// function to get random characters
// function takes in an array (lower/uppercase, special/numerical characters)
function getRandomCharacters (array) {
    // how do we get a random element from an array?
        // we need a random index to denote the element in the array
    var randomIndex = Math.floor(Math.random(array) * array.length);
    var randomElement = array[randomIndex];

    return randomElement;
}

// function to get random characters
function generatePassword() {
    // get the user's password preferences
    var userPasswordPreferences = confirmPasswordPreferences();

    // array to store potential characters
    var potentialCharacters = [];

    // array to store gauranteed characters
    var gauranteedCharacters = [];

    var result = [];

    // check if the user wants lowercase characters, if true then push character to potentialCharacters array
    if(userPasswordPreferences.confirmLowerCase) {
        potentialCharacters = potentialCharacters.concat(lowercaseCharacters);
        gauranteedCharacters.push(getRandomCharacters(lowercaseCharacters));
    }
    // check if the user wants uppercase characters, if true then push character to potentialCharacters array
    if(userPasswordPreferences.confirmUpperCase) {
        potentialCharacters = potentialCharacters.concat(uppercaseCharacters);
        gauranteedCharacters.push(getRandomCharacters(uppercaseCharacters));
    }
    // check if the user wants special characters, if true then push character to potentialCharacters array
    if(userPasswordPreferences.confirmSpecialCharacters) {
        potentialCharacters = potentialCharacters.concat(specialCharacters);
        gauranteedCharacters.push(getRandomCharacters(specialCharacters));
    }
    // check if the user wants numerical characters, if true then push character to potentialCharacters array
    if(userPasswordPreferences.confirmNumericalCharacters) {
        potentialCharacters = potentialCharacters.concat(numericCharacters);
        gauranteedCharacters.push(getRandomCharacters(numericCharacters));
    }

    // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
    for (var i = 0; i < userPasswordPreferences.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

    // Mix in at least one of each guaranteed character in the result
    for (var i = 0; i < gauranteedCharacters.length; i++) {
        result[i] = gauranteedCharacters[i];
    }

    // Transform the result into a string and pass into writePassword
    alert(result);
    console.log(result);
    return result.join('');
}

generatePassword();

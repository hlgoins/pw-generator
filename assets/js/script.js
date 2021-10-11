// Assignment code here
let upperCharAsk = window.prompt('Do you want uppercase letters included in your password? Enter YES or NO.');
let YES = true;
let yes = true;
let NO = false;
let no = false;

  // Allow user to choose NO for uppercase letters in their password
if (upperCharAsk === 'no' || upperCharAsk === 'NO') {
    
    // Confirm they *DO NOT* want uppercase letters
    let confirmUpperChar = window.confirm('"NO", you do not want uppercase letters included. Click OK to confirm or cancel to go back.');

    // If NO, *DO NOT* add uppercase letters
    if (confirmUpperChar) {
      window.alert('"NO" was selected. Your secure password will not contain uppercase letters.')
    }
    if (upperCharAsk !== 'no' && upperCharAsk !== 'NO') {
    } else {
      window.prompt('Please try again. Enter YES or NO.')
    }
    if (upperCharAsk !== 'yes' && upperCharAsk !== 'YES') {
    } else {
      window.prompt('Please try again. Enter YES or NO.')
    }
  }

  // Allow user to choose YES for uppercase letters in their password
if (upperCharAsk === 'yes' || upperCharAsk === 'YES') {
    
  // Confirm they *DO* want uppercase letters
  let confirmUpperChar = window.confirm('"YES", you do want uppercase letters included. Click OK to confirm or cancel to go back.');

  // If YES, *DO* add uppercase letters
  if (confirmUpperChar) {
    window.alert('"YES" was selected. Your secure password will contain uppercase letters.')
  }
if (upperCharAsk !== 'yes' && upperCharAsk !== 'YES') {
  } else {
    window.prompt('Please try again. Enter YES or NO.')
  }
  if (upperCharAsk !== 'no' && upperCharAsk !== 'NO') {
  } else {
    window.prompt('Please try again. Enter YES or NO.')
  }
}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {

  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Password Characters:
var numeric = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var special = "!@#$%^&*()_:;',<>?/`~";
//prompt for the length of the password
function chooseLength() {
    passwordLength = prompt("How many characters do you require in your password?");
    if (passwordLength < 8) {
        alert("the password must have at least 8 characters");
        chooseLength();
    } else if (passwordLength > 128) {
        alert("the password may not have more than 129 characters");
        chooseLength();
    } else if (isNaN(passwordLength)) {
        alert("Password length must have 8-128 characters");
        chooseLength();
    }
    return passwordLength;
}

function generatePassword() {
    
    let password = "";
    var passwordLength = chooseLength();
    //'confirm whether or not to include lowercase, uppercase, numeric, and/or special characters'
    const numChar = confirm("Password will be required to have numbers");
    const upperChar = confirm("Password will be required to have captial letters");
    const lowerChar = confirm("Password will be required to have lower case letters");
    const specialChar = confirm("Password will be required to have special characters");

    if (!(numChar || upperChar || lowerChar || specialChar)) {
        return alert("Your password must include upper and lower case letters, numbers, and special characters.");
    }
    let chars = "";
    if (numChar) {
      chars += numeric;
  }
    if (upperChar) {
        chars += upperCase;
    }
    if (lowerChar) {
        chars += lowerCase;
    }
    if (specialChar) {
        chars += special;
    }
    for (let i = 0; i < passwordLength; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    return password;
}

function writePassword() {
    document.getElementById("password").innerHTML = generatePassword();
}

document.getElementById("generate").addEventListener("click", writePassword);
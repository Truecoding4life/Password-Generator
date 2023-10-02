

var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'; 
const numBer = '0123456789';
const specialChars = '!@#$%^&*()_+[]{}|;:<>?';
var lengthAsk = 0;

function createPass() {
    var passLog = "";

    var welcoming = alert("Let's make you a password today");
    var lengthIs = prompt("How many characters do you want in your password?");
    var lengthAsk = parseInt(lengthIs);
    // Password length can't be less than 128
    if (lengthAsk > 128) {
        alert("Length is too long, length can't exceed 128 characters");
        return;
    } else if (lengthAsk < 8) {
        alert("Length is too short, must be at least 8 characters");
        return;
    } else {
        alert("Password length will be " + lengthAsk);
    }

    var upperInc = confirm("Do you want uppercase to be included?");
    var lowerInc = confirm("Do you want lowercase included?");
    var numberInc = confirm("Do you want numbers to be included?");
    var specialInc = confirm("Do you want special characters?");

    // totalWord will be our new string compose of selected characters
    var totalWord = "";

    if (upperInc) {
        totalWord += upperCase;
    }
    if (lowerInc) {
        totalWord += lowerCase;
    }
    if (numberInc) {
        totalWord += numBer;
    }
    if (specialInc) {
        totalWord += specialChars;
    }

    // This will break up the string into array
    var newArray = totalWord.split("");
    var passWord = "";

    for (var i = 0; i < lengthAsk; i++) {
        var ranDom = newArray[Math.floor(Math.random() * newArray.length)];
        passWord += ranDom;
    }

    document.getElementById("password").innerHTML = passWord;

    console.log(passWord);
}
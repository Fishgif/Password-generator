// Assignment Code

const generateBtn = document.querySelector("#generate");
const inputPasswordLength = document. getElementById ("input-length");
const spanPasswordLength = document. getElementById ("span-length-display");
const inputLowerCase = document. getElementById ("input-lowercase");
const inputUpperCase = document. getElementById ("input-Uppercase");
const inputNumber = document. getElementById ("input-number");
const inputSymbol = document. getElementById ("input-symbol");
const textBoxPassword = document. getElementById ("password");


setPasswordLengthSpan();

function setPasswordLengthSpan(){
  const passwordLength = inputPasswordLength.value;
  spanPasswordLength.textContent = passwordLength;
}

inputPasswordLength.addEventListener("input", function(event){
  setPasswordLengthSpan()
  
  });

const lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
const uppercaseSet = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
const numberSet = "1234567890"
const symbolsSet = "!@#$%&*+?:"

// when i click Generate Button on the generate button 
generateBtn.addEventListener('click', function (){
  // the app will ask me for my password length 
  const passwordLength = Number(inputPasswordLength.value);
  console. log(passwordLength);


let charset = ""

  // Will asl if i want to use 
 
  
  // lowercase
const wantsLowercase = inputLowerCase.checked;
 // uppercase
const wantsUpperCase = inputUpperCase.checked;
 // numners
const wantsNumber = inputNumber.checked;
// Symboll
const wantsSymbol = inputSymbol.checked;



if (!wantsLowercase && !wantsUpperCase && !wantsNumber && !wantsSymbol)
//alert("Please Select at least one box");

 return;

 if (wantsLowercase){
   charset = charset + lowercaseSet
 }
 if (wantsUpperCase){
  charset = charset + uppercaseSet
}
if (wantsNumber){
  charset = charset + numberSet
}
if (wantsSymbol){
  charset = charset + symbolsSet
}

// How to generate a password

// Set accumalator

let password = ""


for (let index = 0; index < passwordLength; index++) {
 

const randomIndex = Math.floor(Math.random() * charset.length) 

const randomChar = charset[randomIndex];
password = password + randomChar;

} 

textBoxPassword.textContent = password
  // then app shoudl generate password 
  
  // Then the generated password in the text area 
 
})




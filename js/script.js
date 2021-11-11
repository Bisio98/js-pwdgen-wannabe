let myName = prompt('Nome:');
let mySurname = prompt('Cognome:');
let myColor = prompt('Colore preferito:');
let myPassword;
console.log(myName);
console.log(mySurname);
console.log(myColor);

myPassword = myName + mySurname + myColor;

document.getElementById('password').innerHTML = myPassword
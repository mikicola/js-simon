// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi. (Cioè lasciate i numeri visibili per 30 secondi allo scadere dei quali li nascondete)
// Dopo aver nascosto i numeri chiedete all'utente (con dei prompt) di inserirli in ordine, uno alla volta.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//visualizzare i numeri
// arrRandomNum = [1,1,1,1,1]
arrRandomNum = []
let numeriRandom = document.querySelector(".numeri-random");

for (let i = 0; i < 5; i++) {
    randomNum = Math.floor(Math.random() * 10 ) + 1;
    arrRandomNum.push(randomNum)
}
console.log(arrRandomNum)
numeriRandom.textContent = arrRandomNum.join(", ");


// numeri visibili per 30 sec
const timerNumbers = setTimeout(hideNumbers, 2000); //TOFIX  mettere 30 sec

function hideNumbers() {
  numeriRandom.style.display = 'none';
}

// prompt per l'utente
arrUserNum = []
let numeriUser = document.querySelector(".numeri-user");
numeriUser.textContent = arrUserNum.join(", ");

const timerPrompt = setTimeout(promptAppear, 3000);
function promptAppear(){
    let num1 = parseInt(prompt("inserisci il primo numero"));
    let num2 = parseInt(prompt("inserisci il secondo numero"));
    let num3 = parseInt(prompt("inserisci il terzo numero"));
    let num4 = parseInt(prompt("inserisci il quarto numero"));
    let num5 = parseInt(prompt("inserisci il quinto numero"));
    arrUserNum.push(num1, num2, num3, num4, num5)
}
// arrUserNum.toString()
// arrUserNum.textContent = arrRandomNum.join(", ");
// arrUserNum.textContent = arrRandomNum.toString();
console.log(arrUserNum)

// verifica TOFIX
function verifica(){
    if (arrRandomNum === arrRandomNum){
        alert('hai vinto')
    } else {
        alert('hai perso')
    }
} 
 

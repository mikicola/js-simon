// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi. (Cioè lasciate i numeri visibili per 30 secondi allo scadere dei quali li nascondete)
// Dopo aver nascosto i numeri chiedete all'utente (con dei prompt) di inserirli in ordine, uno alla volta.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//visualizzare i numeri
arrRandomNum = []
let numeriRandom = document.querySelector(".numeri-random");

for (let i = 0; i < 5; i++) {
    randomNum = Math.floor(Math.random() * 10 ) + 1;
    arrRandomNum.push(randomNum)
}
console.log(arrRandomNum)
numeriRandom.textContent = arrRandomNum.join(", ");


//numeri visibili per 30 sec

const timerNumbers = setTimeout(hideNumbers, 2000); //TOFIX  mettere 30 sec

function hideNumbers() {
  numeriRandom.style.display = 'none';
}

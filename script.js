// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi. (Cioè lasciate i numeri visibili per 30 secondi allo scadere dei quali li nascondete)
// Dopo aver nascosto i numeri chiedete all'utente (con dei prompt) di inserirli in ordine, uno alla volta.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//visualizzare i numeri

arrRandomNum = []
let numeriRandom = document.querySelector(".numeri-random");

for (let i = 0; i < 5; i++) {
    randomNum = Math.floor(Math.random() * 100 ) + 1;
    arrRandomNum.push(randomNum)
}
console.log(arrRandomNum)
numeriRandom.textContent = arrRandomNum.join(", ");


// numeri visibili per 30 sec
const timerNumbers = setTimeout(hideNumbers, 30000); //TOFIX  mettere 30 sec

function hideNumbers() {
  numeriRandom.style.display = 'none';
}

let numeriUser = document.querySelector(".numeri-user");
const timerPrompt = setTimeout(promptAppear, 30000);

// prompt per l'utente
function promptAppear(){
    arrUserNum = []
    let numeriUser = document.querySelector(".numeri-user");
    // numeriUser.textContent = arrUserNum.join(", ");

    let num1 = parseInt(prompt("inserisci il primo numero"));
    let num2 = parseInt(prompt("inserisci il secondo numero"));
    let num3 = parseInt(prompt("inserisci il terzo numero"));
    let num4 = parseInt(prompt("inserisci il quarto numero"));
    let num5 = parseInt(prompt("inserisci il quinto numero"));
    arrUserNum.push(num1, num2, num3, num4, num5)
    console.log(arrUserNum)

// comunico i numeri indovinati 
    let arrIndovinati = [];
        for (let i = 0; i < 5; i++) {
            
            if (arrRandomNum[i] == arrUserNum[i]) {
                arrIndovinati.push(arrUserNum[i]);
            }
        }

        let indovinati = document.querySelector(".indovinati");
        console.log('Hai indovinato:', arrIndovinati.length);
        console.log('arrIndovinati', arrIndovinati);
        
        // fa comparire i numeri nel dom 
        let numeriRandomAfter = document.querySelector('.numeri-random-after')
        numeriRandomAfter.innerHTML = 'I numeri che hai visto: ' + arrRandomNum

        numeriUser.innerHTML = 'I tuoi numeri: ' + arrUserNum
        indovinati.innerHTML = 'Hai indovinato ' + arrIndovinati.length + ' numeri!'  
    }

    // const timerNumbers2 = setTimeout(showNumbers, 6000);
    // function showNumbers() {
    //     numeriRandom.style.display = 'block';
    //   }


 

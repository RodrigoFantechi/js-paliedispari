/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

const choiceUser = prompt('pari o dispari?');
const numbereUser = Number(prompt('scegli un numero da 1 a 5'));
const pcNumber = pcRandomNumber(1,5);

function pcRandomNumber(min, max){
    return Math.floor(Math.random()* (max - min))+min;
}

function pariDispari (input_1, input_2){
    const sum = input_1 + input_2;
        if ((sum%2)===0 ){
        return 'pari';
    } 
    return 'dispari';
}


console.log('numero utente '+ numbereUser);
console.log('numero pc '+ pcNumber);


if (pariDispari(pcNumber, numbereUser) ===choiceUser){
    alert ('hai vinto!');
}else{
    alert ('ha vinto il pc');
}

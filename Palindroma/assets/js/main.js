/* Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

const wordUser = prompt('Inserire una parola');
alert(checkPalindroma (wordUser));



function checkPalindroma (word){
    let secondaParola = '';
    for (let i = word.length; i > 0 ; i--) {
       let lettere = word.charAt(i-1);
       secondaParola += lettere; 
    }

    if (secondaParola === word){
    return 'la parola è palindroma';
}
return 'la parola  non è palindroma'
    }



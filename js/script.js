let myFirstString = 'Ciao mondo';

console.log(myFirstString);


let punteggio;
punteggio = 5;
console.log(punteggio);
punteggio = 10
console.log(punteggio)

//variabile globale
const mesi = 12;
console.log(mesi)

console.log(`numero di mesi è ${mesi}`); //interpolazione di stringhe con il bactrick (``) al posto dell'apice

//variabile locale (local scope)
{
    let studentname = 'valentina';
    console.log(studentname);
}

//console.log(studentName); errore boloccante, studentName è local, per cui non può essere utilizzata in questo punto

let myVariable = 'pippo'; //string
console.log(`la variabile è di tipo ${typeof myVariable}`);
myVariable = 15 //variable;
console.log(`la variabile è di tipo ${typeof myVariable}`);

//undefined
let firstName;
console.log(firstName);
console.log(5 + firstName);

//null
let otherName = null;
console.log(otherName);
console.log(5 + otherName);

//operatore modulo
let firstNumber = 15;
let secondNumber = 4;

console.log(`il resto della divisione tra ${firstNumber} e ${secondNumber} è ${firstNumber % secondNumber}`);


//operatori di assegnazione
let x = 10;
console.log(x +=5); //come se avessi scritto x = x + 5
console.log(x -=3); //come se avessi scritto x= x - 3
let myString ='pippo';
console.log(myString +='Pluto e Paperino');

//uguaglianza identità vs disugualgianza /non identità

let numberString = '5';
let numberNumber = 5;

let strictEquality = numberString === numberNumber;
let strictDisequality = numberString !== numberNumber;

console.log(numberString == numberNumber); //valore O tipo
console.log(numberString === numberNumber);//valore E tipo DA USARE SEMRPE (strict equality)

console.log(numberString != numberNumber); //valore O tipo- disuguaglianza
console.log(numberString !== numberNumber);//valore E tipo- disuguaglianza DA USARE SEMPRE (strict disequality)

console.log(`numerString è ìdentico a numerNumber? ${strictEquality}`);
console.log(`numberString è non identico a numberNumber? ${strictDisequality}`);


//Operatori logici
let minAge =18;
let maxAge = 40;

//AND
console.log(`------------AND---------------`)
console.log(minAge >= 18 && maxAge <= 40); //true
console.log(minAge > 20 && maxAge <= 40); //false
console.log(minAge >= 18 && maxAge < 38); //false
console.log(minAge > 20 && maxAge < 38); //false

//OR
console.log(`------------OR---------------`)
console.log(minAge >= 18 || maxAge <= 40); //true
console.log(minAge > 20 || maxAge <= 40); //true
console.log(minAge >= 18 && maxAge <= 38); //true
console.log(minAge >=20 && maxAge <= 38); //false

//confronto reale
console.log('------------Rientri nella fascia di età?------------')
console.log(myAge >= minAge && myAge <= maxAge);

console.log('------------Rientri nella fascia di età?------------')
console.log(notAge >= minAge && notAge <= maxAge);

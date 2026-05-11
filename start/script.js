/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Saluto personalizzato
   Crea due const "nome" e "cognome".
   Stampa con un template literal: "Ciao, mi chiamo Mario Rossi."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const nome = 'angelo';
const cognome = 'cozzula';

console.log(`io mi chiamo ${nome} ${cognome}`);

/* ESERCIZIO 2 — Calcolatrice base
   Due numeri "a" e "b".
   Stampa le 6 operazioni nel formato "10 + 3 = 13":
   somma, differenza, prodotto, divisione, resto (%), elevamento (**).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const a = 10;
const b = 3;

console.log(`somma  ${a} + ${b} = ${a + b}`);
console.log(`sottrazione ${a} - ${b} = ${a - b}`);
console.log(`moltiplicazione ${a} * ${b} = ${a * b}`);
console.log(`divisione ${a} / ${b} = ${a / b}`);
console.log(`resto ${a} % ${b} = ${a % b}`);
console.log(`elevamento ${a} ** ${b} = ${a ** b}`);

/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/



/* SCRIVI QUI LA TUA RISPOSTA */

const annoNascita = 1996;
const annoCorrente = 2026;

console.log(`${annoCorrente} - ${annoNascita} = ${annoCorrente - annoNascita}`);
console.log(`${annoCorrente} - ${annoNascita} + ${a} = ${annoCorrente - annoNascita + a}`);
console.log(`${annoCorrente} - ${annoNascita} -  ${5} = ${annoCorrente - annoNascita - 5}`);

/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let età = 25;
let minAge = 18;
let maggiorenne = età >= minAge;

console.log(`${età} - ${maggiorenne}`);



/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let persona = 'marco';
let etàPers = 30;
let vero = true;
let niente = null;
let indefinita = undefined;

console.log(typeof persona);
console.log(typeof etàPers);
console.log(typeof vero);
console.log(typeof niente);
console.log(typeof indefinita);


/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = 5;
let stringa = `5`;

console.log(numero == stringa);
console.log(numero === stringa);

/* ESERCIZIO 7 — Conversioni implicite
   Senza eseguire il codice, prevedi in commento il risultato di queste 4 espressioni.
   Poi stampale per verificare.
   - "5" + 3  53
   - "5" - 3  2
   - true + 1  2
   - "10" * "2" 20
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("5"+ 3);
console.log("5"-3);
console.log(true + 1);
console.log("10"*'2')



/* ESERCIZIO 8 — Classificazione numero
   Variabile "n".
   Usando % e operatori logici, stampa tre righe:
   "n è pari: true/false"
   "n è divisibile per 3: true/false"
   "n è pari E divisibile per 3: true/false"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myNumber = 15

console.log(`pari? ${myNumber % 2 === 0}`)
console.log(`è divibile per 3? ${myNumber % 3 === 0}`)
console.log(`è divisibile per 3 e pari ${myNumber % 3 === 0} && ${myNumber % 2 === 0} `)


/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

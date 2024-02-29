**Griglia Campo Minato**
===
nome repo: js-campominato-grid

**Consegna**
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

**Bonus**
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


## SVOLGIMENTO
0. creo container e salvo in variabile
1. creo bottone di generazione della griglia
2. reset dei contenuti del box
3. ciclo (for) di 100 ripetizioni
4. ad ogni ciclo creo un quadrato dentro la griglia
5. aggiungiamo un numero progressivo ad ogni quadrato
6. al click lo square cambia il colore in azzurro

   -CREAZIONE SQUARE:
   A. creo elemento html in js
   B. associo alla classe SQUARE
   C. associo a square il valore(numero)
   D. associo al click i nostri valori al click


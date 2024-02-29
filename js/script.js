
// 0.
const containerBox = document.querySelector('.box');
const btnPlay = document.querySelector('.btn-play');
reset();

// 3.
for (let i = 1; i <= 100; i++) {
  const square = generate (i);
  containerBox.append(square)  //4. stampo gli square in html
}


btnPlay.addEventListener('click', function() {

})










///////////////////   FUNCTION   //////////////////////////


// 2.reset
function reset() {
  container.innerHTML= '';
}

// 1. al click del bottone Play, si vede la griglia di gioco
function startPlay() {
  
}

// creazione div: square
function generate() {
  const sq = document.createElement ('div')  //A
  sq.className = 'square' //B
  console.log(sq);
}



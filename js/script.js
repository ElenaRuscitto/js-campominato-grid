
// 0.
const containerBox = document.querySelector('.box');
const btnPlay = document.querySelector('.btn-play');


reset();
console.log(reset);



btnPlay.addEventListener('click', startPlay()  );









///////////////////   FUNCTION   //////////////////////////


// 2.reset
function reset() {
  containerBox.innerHTML= '';
}

// 1. al click del bottone Play, si vede la griglia di gioco
function startPlay() {

  // 3.
  for (let i = 1; i <= 100; i++) {
    const square = generate (i);
    containerBox.append(square)  //4. stampo gli square in html
  }
}

// creazione div: square
function generate() {
  const sq = document.createElement ('div')  //A
  sq.className = 'square' //B
  console.log(sq);
}



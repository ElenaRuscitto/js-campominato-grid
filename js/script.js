
// 0.
const containerBox = document.querySelector('.box');
const btnPlay = document.querySelector('.btn-play');


reset();
console.log(reset);



btnPlay.addEventListener('click', startPlay);









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
    containerBox.append(square);  //4. stampo gli square in html
  }
   
}

// creazione div: square
function generate(numeri) {
  const sq = document.createElement ('div')  //A
  sq.className = 'square' //B
 
  sq.sqID = numeri;

  // 5. aggiungo i numeri agli squer
  sq.addEventListener('click', function(){
    console.log(this);

  /** CON IF
    if(this.innerHTML === ''){
      this.innerHTML = this.sqID;
    }else{
      this.innerHTML = '';
    }
  */

    // METODO TERNARIO
    this.innerHTML = (this.innerHTML === '') ? this.innerHTML = this.sqID : this.innerHTML = '';

    // 6. cambio colore al click con azzurro
    this.classList.toggle('.clicked')

  })

  return sq;
}



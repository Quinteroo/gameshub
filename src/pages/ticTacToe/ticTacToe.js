import './ticTacToe.css'


export const ticTacToe = () => {
  let scorePlayerOne = 0;
  let scorePlayerTwo = 0;

  let valuePlayerOne = 'X';
  let valuePlayerTwo = 'O';

  let turno = 0;
  const tablero = [];

  const divGamesContainer = document.querySelector('.game-container');
  divGamesContainer.innerHTML = "";

  divGamesContainer.innerHTML = `
    <div class="tablero">
      <button id="1"></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
    </div>
  `;

  const win = () => {

    // Primera fila
    if (tablero[0] === tablero[1] && tablero[0] === tablero[2] && tablero[0] === '<p>X</p>') {
      console.log(tablero);
      alert('Ha ganado jugador X');
    } else if (tablero[0] === tablero[1] && tablero[0] === tablero[2] && tablero[0] === '<p>O</p>') {
      console.log(tablero);
      alert('Ha ganado jugador O');
    }

    // Segunda fila
    if (tablero[3] === tablero[4] && tablero[3] === tablero[5] && tablero[3] === '<p>X</p>') {
      console.log(tablero);
      alert('Ha ganado jugador X');
    } else if (tablero[3] === tablero[4] && tablero[3] === tablero[5] && tablero[3] === '<p>O</p>') {
      console.log(tablero);
      alert('Ha ganado jugador O');
    }

    // Tercera fila
    if (tablero[6] === tablero[7] && tablero[6] === tablero[8] && tablero[6] === '<p>X</p>') {
      console.log(tablero);
      alert('Ha ganado jugador X');
    } else if (tablero[6] === tablero[7] && tablero[6] === tablero[8] && tablero[6] === '<p>O</p>') {
      console.log(tablero);
      alert('Ha ganado jugador O');
    }

    // Primera columna
    if (tablero[0] === tablero[3] && tablero[0] === tablero[6] && tablero[0] === '<p>X</p>') {
      console.log(tablero);
      alert('Ha ganado jugador X');
    } else if (tablero[0] === tablero[3] && tablero[0] === tablero[6] && tablero[0] === '<p>O</p>') {
      console.log(tablero);
      alert('Ha ganado jugador O');
    }

    // Segunda columna
    if (tablero[1] === tablero[4] && tablero[1] === tablero[7] && tablero[1] === '<p>X</p>') {
      console.log(tablero);
      alert('Ha ganado jugador X');
    } else if (tablero[1] === tablero[4] && tablero[1] === tablero[7] && tablero[1] === '<p>O</p>') {
      console.log(tablero);
      alert('Ha ganado jugador O');
    }

    // Tercera columna
    if (tablero[2] === tablero[5] && tablero[2] === tablero[8] && tablero[2] === '<p>X</p>') {
      console.log(tablero);
      alert('Ha ganado jugador X');
    } else if (tablero[2] === tablero[5] && tablero[2] === tablero[8] && tablero[2] === '<p>O</p>') {
      console.log(tablero);
      alert('Ha ganado jugador O');
    }

    // Primera diagonal
    if (tablero[0] === tablero[4] && tablero[0] === tablero[8] && tablero[0] === '<p>X</p>') {
      console.log(tablero);
      alert('Ha ganado jugador X');
    } else if (tablero[0] === tablero[4] && tablero[0] === tablero[8] && tablero[0] === '<p>O</p>') {
      console.log(tablero);
      alert('Ha ganado jugador O');
    }

    // Segunda diagonal
    if (tablero[2] === tablero[4] && tablero[2] === tablero[6] && tablero[2] === '<p>X</p>') {
      console.log(tablero);
      alert('Ha ganado jugador X');
    } else if (tablero[2] === tablero[4] && tablero[2] === tablero[6] && tablero[2] === '<p>O</p>') {
      console.log(tablero);
      alert('Ha ganado jugador O');
    }
  }


  const paintMark = (e, i) => {
    const btn = e.target;
    const mark = (turno % 2 === 0) ? `<p>${valuePlayerOne}</p>` : `<p>${valuePlayerTwo}</p>`;
    btn.innerHTML = mark;
    tablero[i] = mark;
    turno++;
    if (turno > 4) {
      win()
    }
  }

  const buttons = document.querySelectorAll('.tablero button');

  buttons.forEach((btn, i) => {
    btn.addEventListener('click', (e) => paintMark(e, i));   //! la pasamos tanto los datos del evento como el índice
  });
}



import './startGame.css'

export const startGame = () => {
  const divGameContainer = document.querySelector('.game-container')
  divGameContainer.innerHTML = "";

  divGameContainer.innerHTML = `
  <h2>Escoja juego!</h2>
  <ul>
    <li>👾 🕹️ 🐉</li>
    <li class="game-name">A > tres en raya</li>
    <li class="game-name">B > pieda, papel, tijera</li>
    <li class="game-name">C > whac a mole </li>
  </ul>
  `
}
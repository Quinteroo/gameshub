import './nav.css';
import { dataBase } from '../dataBase/dataBase';
import { startGame } from '../startGame/startGame';
import { whac } from '../../pages/whac/whac';
import { scissors } from '../../pages/scissors/scissors';
import { ticTacToe } from '../../pages/ticTacToe/ticTacToe';

export const nav = () => {
  const nav = document.querySelector('nav')

  const divCont = document.createElement('div')
  const imgCont = document.createElement('img')
  imgCont.src = dataBase.controller;

  divCont.appendChild(imgCont)
  nav.appendChild(divCont)

  const ulButons = document.createElement('ul')
  ulButons.innerHTML = `
  <li class="select">
    <button><a href="${dataBase.github}">github</a></button>
    <button class="start">start</button>
  </li>
  <li>
    <button class="game-A">
      A
    </button>
  </li>
  <li>
    <button class="game-B">
      B
    </button>
  </li>
  <li>
    <button class="game-C">
      C
    </button>
  </li>
  `

  nav.appendChild(ulButons)

  const startButton = document.querySelector('.start')
  startButton.addEventListener('click', () => {
    startGame()
  })

  const gameA = document.querySelector('.game-A')
  gameA.addEventListener('click', ticTacToe)

  const gameB = document.querySelector('.game-B')
  gameB.addEventListener('click', scissors)

  const gameC = document.querySelector('.game-C')
  gameC.addEventListener('click', whac)

}

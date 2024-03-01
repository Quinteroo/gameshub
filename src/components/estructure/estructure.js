import './estructure.css'
import { dataBase } from '../dataBase/dataBase'

export const estructure = () => {
  const divApp = document.querySelector('#app')

  const header = document.createElement('header')
  const h1 = document.createElement('h1')
  h1.textContent = dataBase.site
  const logo = document.createElement('img')
  logo.src = dataBase.image
  header.appendChild(h1)
  header.appendChild(logo)


  const main = document.createElement('main')
  const sectionScreen = document.createElement('section')
  const divGameContainer = document.createElement('div')
  divGameContainer.classList.add('game-container')
  sectionScreen.appendChild(divGameContainer)
  main.appendChild(sectionScreen)
  divGameContainer.innerHTML = `
  <h2>Escoja juego!</h2>
  <ul>
    <li>👾 🕹️ 🐉</li>
    <li class="game-name">A > tres en raya</li>
    <li class="game-name">B > pieda, papel, tijera</li>
    <li class="game-name">C > whac a mole </li>
  </ul>
  `

  const nav = document.createElement('nav')
  main.appendChild(nav)

  const footer = document.createElement('footer')
  footer.innerHTML = `
  <p>made by <a href="${dataBase.linkedIn}">Quinteroo</a></p>
  `


  divApp.appendChild(header)
  divApp.appendChild(main)
  divApp.appendChild(footer)

}
import './scissors.css'

export const scissors = () => {
  const divGameContainer = document.querySelector('.game-container');

  divGameContainer.innerHTML = "";

  let result;

  divGameContainer.innerHTML = `
  <div class="arena">
    <div class="consolaChooice pokeball"></div>
    <div class="resultado">
      <h2>Escoge tu pokémon</h2>
    </div>
    <div class="playerChooice pokeball"></div>
  </div>
  <div class="panelChooice">
    <div class="squirtle"></div>
    <div class="charmander"></div>
    <div class="bulbasaur"></div> 
  </div>
  `

  const divArena = document.querySelector('.arena');
  const divConsolaChooice = document.querySelector('.consolaChooice');
  const divResultado = document.querySelector('.resultado h2');
  const title = document.querySelector('h2');
  const divPlayerChooice = document.querySelector('.playerChooice');
  const divPanelChooice = document.querySelectorAll('.panelChooice div')
  const divSquirtle = document.querySelector('.squirtle');
  const divCharmander = document.querySelector('.charmander');
  const divBulbasaur = document.querySelector('.bulbasaur');

  divSquirtle.id = 1;
  divCharmander.id = 2;
  divBulbasaur.id = 3;

  let pokemonPlayer;
  let pokemonConsola;
  let timerId = null;

  divPanelChooice.forEach((panel) => {
    panel.addEventListener('click', pokeChooice)
  })


  function win() {
    if (pokemonPlayer == pokemonConsola) {
      title.textContent = 'Empate!'
    } else if (pokemonPlayer == 1 && pokemonConsola == 2) {
      title.textContent = 'Gana Squirtle!'
    } else if (pokemonPlayer == 2 && pokemonConsola == 3) {
      title.textContent = 'Gana Charmander!'
    } else if (pokemonPlayer == 2 && pokemonConsola == 1) {
      title.textContent = 'Gana Squitle!'
    } else if (pokemonPlayer == 3 && pokemonConsola == 1) {
      title.textContent = 'Gana Bulbasaur!'
    } else if (pokemonPlayer == 3 && pokemonConsola == 2) {
      title.textContent = 'Gana Charmander!'
    }

  }


  function randomConsolaChooice() {
    let randomChooice = Math.floor(Math.random() * 3) + 1
    // console.log(randomChooice);
    clearInterval(timerId)

    divConsolaChooice.classList.remove('pokeball')
    if (randomChooice == 1) {
      divConsolaChooice.classList.add('squirtle')
    } else if (randomChooice == 2) {
      divConsolaChooice.classList.add('charmander')
    } else if (randomChooice == 3) {
      divConsolaChooice.classList.add('bulbasaur')
    }
    pokemonConsola = randomChooice;
    win()
  }


  function pokeChooice(e) {
    console.log(e);
    divPlayerChooice.classList.remove('pokeball')
    if (e.target.id == 1) {
      divPlayerChooice.classList.add('squirtle')
    } else if (e.target.id == 2) {
      divPlayerChooice.classList.add('charmander')
    } else if (e.target.id == 3) {
      divPlayerChooice.classList.add('bulbasaur')
    }

    pokemonPlayer = e.target.id;

    timerId = setInterval(randomConsolaChooice, 1000)
  }
}
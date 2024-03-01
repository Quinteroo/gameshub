console.log('hello Quinteroo!')

import { estructure } from './src/components/estructure/estructure'
import { links } from './src/components/links/links'
import { nav } from './src/components/nav/nav'
import './style.css'


const main = () => {
  estructure()
  nav()

  links()
}

main()
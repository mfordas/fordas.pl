import { Link } from "gatsby"
import React from "react"

import "./menu.scss"

const Menu = () => {
return(
    <div
      className="menu"
    >
        {/* <Link
          to="/"
          className="menuItem"
        >
        główna
        </Link> */}
        <Link
          to="/aboutMe"
          className="menuItem"
        >
          o mnie
        </Link>
        <Link
          to="/blog"
          className="menuItem"
        >
          blog
        </Link>
        <Link
          to="/contact"
          className="menuItem"
        >
          kontakt
        </Link>
        <a href={'https://fordas.pl/Portfolio/index'} target='_blank' className="menuItem" style={{backgroundColor:'#ffd000'}}>
          portfolio
        </a>
    </div>
)
}



export default Menu

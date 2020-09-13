import { Link } from "gatsby"
import React from "react"

import "./menu.scss"



const Menu = () => {
return(
    <div
      className="menu"
    >
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
          to="/"
          className="menuItem"
        >
          książki
        </Link>
        <Link
          to="/contact"
          className="menuItem"
        >
          kontakt
        </Link>
    </div>
)
}



export default Menu

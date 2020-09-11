import { Link } from "gatsby"
import React from "react"

import "./menu.scss"

const Menu = () => (
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
          to="/"
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
          to="/"
          className="menuItem"
        >
          kontakt
        </Link>
    </div>
)



export default Menu

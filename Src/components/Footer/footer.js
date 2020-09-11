import React from "react"

import "./footer.scss"

const Footer = () => (
    <footer>
          <div className="footerItem">
        Copyright © Mateusz Fordas {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </footer>
)



export default Footer

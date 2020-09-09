import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Menu from './menu'
import Footer from './footer'
import "./mainPage.scss"


const MainPage = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

  
  return (
    <div className="mainPageContainer" >
        <div className="mainColumn">
        To jest głowna kolumna
        </div>
        <div className="helpColumn">
        To jest kolumna pomocnicza
        </div>
    </div>
  )
}

MainPage.propTypes = {
  children: PropTypes.node,
}

export default MainPage

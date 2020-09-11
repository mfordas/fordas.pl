import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Menu from './menu'
import Footer from './Footer/footer'
import "./mainPage.scss"


const MainPageContent = ({ children }) => {
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

MainPageContent.propTypes = {
  children: PropTypes.node,
}

export default MainPageContent

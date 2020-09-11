import React from "react"
import PropTypes from "prop-types"

import Image from "../UniversalComponents/image"
import "./mainPage.scss"


const MainPageContent = () => {
  return (
    <div className="mainPageContainer" >
        <div className="contentArea">
        <div className="text">Cześć. <br/> Jestem konstruktorem elementów z tworzyw sztucznych i programistą JavaScript.</div>
        <div className="image"><Image/></div>
        </div>
        <div className="contentArea">
        To jest głowna kolumna
        </div>
        <div className="contentArea">
        To jest głowna kolumna
        </div>
    </div>
  )
}

MainPageContent.propTypes = {
  children: PropTypes.node,
}

export default MainPageContent

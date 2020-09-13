import React from "react"
import PropTypes from "prop-types"

import MainPageImage1 from "./mainPageImage1"
import MainPageImage2 from "./mainPageImage2"
import "./mainPage.scss"


const MainPageContent = () => {
  return (
    <div className="mainPageContainer" >
        <div className="contentArea">
        <div className="text">Cześć. <br/> Jestem konstruktorem elementów z tworzyw sztucznych i programistą JavaScript.</div>
        <div className="image"><MainPageImage1/></div>
        </div>
        <div className="contentArea">
        <div className="image"><MainPageImage2/></div>
        <div className="text">Cześć. <br/> Jestem konstruktorem elementów z tworzyw sztucznych i programistą JavaScript.</div>
        </div>
        <div className="contentArea">
        <div className="text">Cześć. <br/> Jestem konstruktorem elementów z tworzyw sztucznych i programistą JavaScript.</div>
        <div className="image"><MainPageImage2/></div>
        </div>
    </div>
  )
}

MainPageContent.propTypes = {
  children: PropTypes.node,
}

export default MainPageContent

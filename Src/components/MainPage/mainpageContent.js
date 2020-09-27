import React from "react"
import PropTypes from "prop-types"

import Image from '../UniversalComponents/image'
import "./mainPage.scss"

const MainPageContent = () => {
  return (
    <div className="mainPageContainer" >
        <div className="contentArea">
        <div className="text">Cześć. <br/> Nazywam się Mateusz Fordas. Jestem konstruktorem elementów z tworzyw sztucznych i programistą JavaScript.</div>
        <div className="image"><Image alt="mfordas photo" filename="pexels-pixabay-257897.jpg" /></div>
        </div>
        <div className="contentArea">
        <div className="image"><Image alt="shaking hand photo" filename="hand-819279_1920.jpg"/></div>
        <div className="text"><p>Jeśli chcesz nawiązać współpracę możesz skontaktować się ze mną przez formularz kontaktowy, e-mail: mateusz@fordas.pl lub
        <a href={'https://www.linkedin.com/in/mateusz-fordas/'} target='_blank'> <b>LinkedIn</b></a></p></div>
        </div>
        <div className="contentArea">
        <div className="text"><p>Aby dowiedzieć się więcej o mnie i moich projektach odwiedź sekcję "o mnie" a także moje
        <a href={'https://fordas.pl/Portfolio/index'} target='_blank'> <b>portfolio</b></a></p></div>
        <div className="image"><Image alt="mfordas photo" filename="ashley-batz-betmVWGYcLY-unsplash.jpg" /></div>
        </div>
    </div>
  )
}

MainPageContent.propTypes = {
  children: PropTypes.node,
}

export default MainPageContent

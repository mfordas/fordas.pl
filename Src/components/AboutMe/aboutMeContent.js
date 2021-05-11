import React from 'react';

import "./aboutMe.scss"
import Image from '../UniversalComponents/image'


const AboutMeContent = () => (
        <div className="aboutMeContainer">
            <div className="aboutMeContent">
                <p>Cześć, nazywam się Mateusz Fordas. Ukończyłem studia na kierunku Mechanika i Budowa Maszyn, specjalność
                Konstrukcja i Eksploatacja Maszyn na Politechnice Wrocławskiej.</p>
                <p>Obecnie współpracuję z STX Next jako JavaScript Developer. 
                Technologie, którymi się interesuję to React, React-Native oraz Node.JS.</p>
                <p>Poprzednio pracowałem w branży Automotive w roli Lidera Projektu / Konstruktora. Zajmowałem się
                konstrukcją zderzaków samochodowych. Brałem udział w projektach zderzaków do samochodów
                takich jak: Mercedes S-klasa, Mercedes S-klasa AMG, Porsche 911, Mercedes GLA, BMW M2 i innych. Nie jest to zakmnięty
                obszar w moim życiu zawodowym ponieważ zdarza mi się po pracy pracować jako konstruktor.</p>
                <p>Interesuję się również zarządzaniem projektami. Szczególnie metodykami zwinnymi. Posiadam certyfikat PSM I.</p>
                <div className="image"><Image alt="mfordas photo" filename="mf.jpg" /></div>
                </div>
        </div>
);

export default AboutMeContent;
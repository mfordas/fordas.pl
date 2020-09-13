import React from 'react';

import "./aboutMe.scss"
import Photo from './photo'


const AboutMeContent = () => (
        <div className="aboutMeContainer">
            <div className="aboutMeContent">
                <div>Cześć, nazywam się Mateusz Fordas. Ukończyłem studia na kierunku Mechanika i Budowa Maszyn, specjalność
                Konstrukcja i Eksploatacja Maszyn na Politechnice Wrocławskiej.</div>
                <div>Obecnie pracuję jako Lider Projektu / Konstruktor w branży Automotive. Na codzień w pracy zajmuję się
                konstrukcją zderzaków samochodowych. Brałem udział w projektach do samochodów
                takich jak: Mercedes S-klasa, Mercedes S-klasa AMG, Porsche 911, Mercedes GLA, BMW M2 i innych.</div>
                <div>Jakiś czas temu zaintersowałem się programowaniem, zacząłem od Javy ale znalazłem w sieci informację o CodersCamp
                i wziąłem z nim udział. Od tamtego czasu, czyli od października 2019 po pracy zajmuję się programowaniem w JavaScript.
                </div>
                <div>Interesuję się również zarządzaniem projektami. Szczególnie metodykami zwinnymi. Posiadam certyfikat PSM I.</div>
                <div className="image"><Photo/></div>
                </div>
        </div>
);

export default AboutMeContent;
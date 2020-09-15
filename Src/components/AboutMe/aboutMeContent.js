import React from 'react';

import "./aboutMe.scss"
import Image from '../UniversalComponents/image'


const AboutMeContent = () => (
        <div className="aboutMeContainer">
            <div className="aboutMeContent">
                <p>Cześć, nazywam się Mateusz Fordas. Ukończyłem studia na kierunku Mechanika i Budowa Maszyn, specjalność
                Konstrukcja i Eksploatacja Maszyn na Politechnice Wrocławskiej.</p>
                <p>Obecnie pracuję jako Lider Projektu / Konstruktor w branży Automotive. Na codzień w pracy zajmuję się
                konstrukcją zderzaków samochodowych. Brałem udział w projektach do samochodów
                takich jak: Mercedes S-klasa, Mercedes S-klasa AMG, Porsche 911, Mercedes GLA, BMW M2 i innych.</p>
                <p>Jakiś czas temu zaintersowałem się programowaniem, zacząłem od Javy ale znalazłem w sieci informację o CodersCamp
                i wziąłem z nim udział. Od tamtego czasu, czyli od października 2019 po pracy zajmuję się programowaniem w JavaScript.
                </p>
                <p>Interesuję się również zarządzaniem projektami. Szczególnie metodykami zwinnymi. Posiadam certyfikat PSM I.</p>
                <div className="image"><Image alt="mfordas photo" filename="photo.png" /></div>
                </div>
        </div>
);

export default AboutMeContent;
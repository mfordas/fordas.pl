import React from 'react';

import './contactForm.scss';

const ContactFormContent = () => (
    <div className="contactFormContainer">
                            <form className="contactForm" id="contact" action='<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>'>
                                <label>
                                    <p>Imię:</p>
                                    <div className="statusFirstName"></div>
                                    <input type="text" id="firstname" name="firstname" placeholder="Imię"
                                        ></input>
                                </label>
                                <label>
                                    <p className="w3-center">Adres e-mail:</p>
                                    <div className="statusEmail"></div>
                                    <input type="email" name="email" id="email" placeholder="E-mail" ></input>
                                </label>
                                <label>
                                    <p className="w3-center">Temat:</p>
                                    <div className="statusSubject"></div>
                                    <input type="text" name="subject" id="subject" placeholder="Temat"
                                        ></input>
                                </label>
                                <label>
                                    <p className="w3-center">Treść wiadomości:</p>
                                    <div className="statusMessage"></div>
                                    <textarea name="message" id="message" placeholder="Napisz coś..."
                                        ></textarea>
                                </label>
                                <div className="w3-container w3-large w3-center w3-margin-bottom w3-padding">
                                    <input type="submit" id="submit" className="w3-blue w3-round button" value="Wyslij"></input>
                                    <div className="statusResult" id="result"></div>
                                </div>
                            </form>
                        </div>

)

export default ContactFormContent
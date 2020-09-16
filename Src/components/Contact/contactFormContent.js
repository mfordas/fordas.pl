import React, { useState } from 'react';
import axios from 'axios';

import './contactForm.scss';
import ErrorMessage from '../UniversalComponents/errorMessage';

const ContactFormContent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [thema, setThema] = useState('');
    const [message, setMessage] = useState('');
    const [formValid, setFormValid] = useState(true);
    const [nameValid, setNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [themaValid, setThemaValid] = useState(false);
    const [messageValid, setMessageValid] = useState(false);

    const onButtonSubmit = async e => {
        e.preventDefault();
        nameValidate();
        emailValidate();
        themaValidate();
        messageValidate();
        if (!nameValid || !emailValid || !themaValid || !messageValid) {
            setFormValid(false);
        } else { setFormValid(true) };
        nameValid && emailValid && themaValid && messageValid && formValid ? sendEmail() : console.log('error');
      }


    
      const nameValidate = () => {
        if (name.length < 3) {
          return <ErrorMessage message='Imię powinno być dłuższe niż 2 znaki'/>;
        }
        else { setNameValid(true); return null}
      }
    
      const emailValidate = () => {
        if (email.length < 5 || !email.includes('@') || !email.includes('.')) {
          return <ErrorMessage message='Wpisz prawidłowy e-mail'/>;
        }
        else { setEmailValid(true); return null }
      }

      const themaValidate = () => {
        if (thema.length <= 5) {
          return <ErrorMessage message='Temat powinien być dłuższy niż 4 znaki'/>;
        }
        else { setThemaValid(true); return null }
      }

      const messageValidate = () => {
        if (message.length <= 10) {
          return <ErrorMessage message='Wiadomosć powinna być dłuższa niż 10 znaków'/>;
        }
        else { setMessageValid(true); return null }
      }
     
      const sendEmail = async () => {
        const messageData = JSON.stringify({
            name: name,
            subject: thema,
            email: email,
            message: message
        });

        await axios({
            method: 'post',
            url: './contact.php',
            data: messageData,
        }).then(console.log('done'));

      }

return (
    <div className="contactFormContainer">
                            <form className="contactForm" id="contact" action='<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>'>
                                <label>
                                    <p>Imię:</p>
                                    <input type="text" placeholder="imię" onChange={e => setName(e.target.value.toLowerCase())}></input>
                                   {!formValid && !nameValid ? nameValidate() : null}
                                </label>
                                <label>
                                    <p className="w3-center">Adres e-mail:</p>
                                    <input type="email" placeholder="e-mail" onChange={e => setEmail(e.target.value.toLowerCase())}></input>
                                   {!formValid && !emailValid ? emailValidate() : null}
                                </label>
                                <label>
                                    <p className="w3-center">Temat:</p>
                                    <input type="text" placeholder="Temat" onChange={e => setThema(e.target.value.toLowerCase())}></input>
                                    {!formValid && !themaValid ? themaValidate() : null}
                                </label>
                                <label>
                                    <p>Treść wiadomości:</p>
                                    <textarea placeholder="Napisz coś..." onChange={e => setMessage(e.target.value.toLowerCase())}></textarea>
                                    {!formValid && !messageValid ? messageValidate() : null}
                                </label>
                                <div>
                                    <button onClick={e => {onButtonSubmit(e)}}>Wyślij</button>
                                    
                                </div>
                            </form>
                        </div>

)

}

export default ContactFormContent
import React from 'react'
import {  FaCalendar, FaGithub, FaLinkedin } from 'react-icons/fa'
import '../App.css'


const Footer = () => {
return (
    <footer className="footer">
    <a href="mailto:Jonathanumana86@gmail.com" className="footer__link">Jonathanumana86@gmail.com</a>
        <ul className="social-list">
            <li className="social-list__item">
                <a class="social-list__link" href="https://www.linkedin.com/in/johnathan-umana-658b06170/" target="_blank">
                    <FaLinkedin />
                </a>
            </li>
            <li className="social-list__item">
                <a class="social-list__link" href="https://github.com/Johnathan238" target="_blank">
                    <FaGithub />
                </a>
            </li>
            <li className="social-list__item">
                <a class="social-list__link" href="https://docs.google.com/forms/d/e/1FAIpQLScnMSkRHUQGU7CoQuqW4Yqdef3c_1IEHpLNsBW5KIFOmaCGXA/viewform?usp=sf_link" target="_blank">
                    <FaCalendar />
                </a>
            </li>
        </ul>

    </footer>
    )
}

export default Footer;
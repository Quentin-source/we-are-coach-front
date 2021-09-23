import { NavLink } from "react-router-dom";

import './style.scss'

const Footer = () => {
    return (
        <div className= 'footer'>
            <NavLink className="footer-link" to="">Faq</NavLink>
            <NavLink className="footer-link" to="">Qui sommes nous</NavLink>
            <NavLink className="footer-link" to="">CGU</NavLink>
        </div>
    );
};

export default Footer;

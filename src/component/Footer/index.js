import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className= 'footer'>
            <NavLink to="">Faq</NavLink>
            <NavLink to="">Qui sommes nous</NavLink>
            <NavLink to="">CGU</NavLink>
        </div>
    );
};

export default Footer;

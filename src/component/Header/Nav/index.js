import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from '../../../logo.svg';

import Usermenu from '../Usermenu/';


const Nav = () => (
    <div className="navbar">
        <Link> <img src={logo} className="header-logo" alt="Logo We are coach" /></Link>
        <NavLink> Acceuil </NavLink>
        <NavLink> Entrainement </NavLink>
        <NavLink> Contact </NavLink>
        <div className="usermenu">
            <Usermenu />
        </div>
    </div>
);

export default Nav;
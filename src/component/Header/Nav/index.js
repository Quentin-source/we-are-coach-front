import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from '../../../assets/images/Logo.jpg';

import Usermenu from '../Usermenu/';


const Nav = () => (
    <div className="navbar">
        <Link to="/"> <img src={logo} className="header-logo" alt="Logo We are coach" /></Link>
        <NavLink
            className="menu-link"
            activeClassName="menu-link--active"
            to="/"
        exact
        >
            Acceuil 
        </NavLink>
        <NavLink
            className="menu-link"
            activeClassName="menu-link--active"
            to="/"
            exact
        >
            Entrainement
        </NavLink>
        <NavLink
        className="menu-link"
        activeClassName="menu-link--active"
        to="/"
        exact
        >
            Contact
        </NavLink>
        <div className="usermenu">
            <Usermenu />
        </div>
    </div>
);

export default Nav;
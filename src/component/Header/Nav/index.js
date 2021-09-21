import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from '../../../assets/images/Logo.jpg';
import './style.scss';

import Usermenu from '../Usermenu/';


const Nav = () => (
    <div className="navbar">
        <Link to="/"> <img src={logo} className="header-logo" alt="Logo We are coach" /></Link>
        <div className="navbar-link">
            <NavLink
                className="navbar-link"
                activeClassName="navbar-link--active"
                to="/"
            exact
            >
                Acceuil 
            </NavLink>
            <NavLink
                className="navbar-link"
                activeClassName="navbar-link--active"
                to="/"
                exact
            >
                Entrainement
            </NavLink>
            <NavLink
            className="navbar-link"
            activeClassName="navbar-link--active"
            to="/"
            exact
            >
                Contact
            </NavLink>
        </div>
        <Usermenu />       
    </div>
);

export default Nav;
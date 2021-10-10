import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import './style.scss';

const Navdrop = () => {
    const navDropState = useSelector((state)=> state.home.dropMenu)
    return (
        <div className={!navDropState ? 'dropmenu dropmenu-nav dropmenu-nav--hidden' : 'dropmenu dropmenu-nav'} >
            <Link to="/"> Acceuil</Link>
            <Link to="/Entrainement"> Entrainement</Link>
            <Link to="/Contact"> Contact</Link>
        </div>
    );
} 

export default Navdrop;
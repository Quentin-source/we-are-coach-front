import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import './style.scss';

const Usermenu = () => {
    const menuState = useSelector((state)=> state.home.userMenu)
    return (
        <div className={!menuState ? 'dropmenu dropmenu-user dropmenu-user--hidden' : 'dropmenu dropmenu-user'}>
            <Link> Mon profil</Link>
            <Link> Mes entrainements</Link>
            <Link> Mes favoris</Link>
            <Link>Deconnection</Link>
        </div>
    );
} 

export default Usermenu;
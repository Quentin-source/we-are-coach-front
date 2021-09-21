import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import './style.scss';

const Usermenu = () => {
    const menuState = useSelector((state)=> state.home.userMenu)
    return (
        <div className={menuState? 'usermenu usermenu--open': 'usermenu usermenu--close'}>
            <Link> Mon profil</Link>
            <Link> Mes entrainements</Link>
            <Link> Mes favoris</Link>
            <Link>Deconnection</Link>
        </div>
    );
} 

export default Usermenu;
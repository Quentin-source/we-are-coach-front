import { Link } from "react-router-dom";

import './style.scss';

const Usermenu = () => {
    return (
        <div className="usermenu">
            <Link> Mon profil</Link>
            <Link> Mes entrainements</Link>
            <Link> Mes favoris</Link>
            <Link>Deconnection</Link>
        </div>
    );
} 

export default Usermenu;
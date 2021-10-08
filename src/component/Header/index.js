import Usermenu from '../Header/Usermenu';
import Navdrop from '../Header/NavDrop';
import Nav from './Nav';
import './style.scss'

const Header = () => (
    <header className="app-header">
        <Nav />
        <Usermenu />
        <Navdrop />
    </header>
);

export default Header;

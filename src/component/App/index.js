import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from '../Home';
import Header from '../Header';
import Footer from '../Footer';

import Usermenu from '../Usermenu';

import './style.scss';

const App = () => {
    const menuState = useSelector((state)=> state.home.userMenu)
    return (
        <div className="app">
            <Header />
            <div className={menuState ? 'content-drop content-drop--open' : 'content-drop'}>
                <Usermenu />
                <Route>
                    <Home />
                </Route>
            </div>
            <Footer />
        </div>
    );    
}

export default App;

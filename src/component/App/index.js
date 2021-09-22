import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from '../Home';
import Header from '../Header';
import Footer from '../Footer';
import Carousel from '../Category';

import Usermenu from '../Header/Usermenu';
import Navdrop from '../Header/Navdrop';

import './style.scss';

const App = () => {
    const menuState = useSelector((state)=> state.home.userMenu)
    const navDropState = useSelector((state)=> state.home.dropMenu)

    return (
        <div className="app">
            <Header />
            <div className={menuState || navDropState ? 'content-drop content-drop--open' : 'content-drop'}>
                <div className="dropMenus">
                    <Navdrop />
                    <Usermenu />
                </div>    
                <Switch>
                    <Route path="/Entrainements" exact>
                        <Carousel />
                    </Route>
                    <Route>
                        <Home />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </div>
    );    
}

export default App;

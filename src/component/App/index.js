import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import Header from '../Header';
import Footer from '../Footer';

import Usermenu from '../Header/Usermenu';
import Navdrop from '../Header/Navdrop';

import './style.scss';
import Category from '../Category';
import Carousel from '../Carousel';

const App = () => {
    return (
        <div className="app">
            <Header />
            <Usermenu />
            <Navdrop />
            <Switch>
                <Route path="/Entrainements" exact>
                    <Category />
                </Route>
                <Route path="/Contacts" exact>
                    <Carousel />
                </Route>
                <Route>
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </div>
    );    
}

export default App;

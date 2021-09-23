import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import Header from '../Header';
import Footer from '../Footer';

import Usermenu from '../Header/Usermenu';
import Navdrop from '../Header/Navdrop';

import './style.scss';
import Categories from '../Categories';

const App = () => {
    return (
        <div className="app">
            <div className="app-header">
                <Header />
                <Usermenu />
                <Navdrop />
            </div>
            <Switch>
                <Route path="/Entrainements" exact>
                    <Categories />  
                </Route>
                <Route path="/Contacts" exact>
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

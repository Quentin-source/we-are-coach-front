import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Loader from '../Loading';
import Home from '../Home';
import Header from '../Header';
import Footer from '../Footer';

import Usermenu from '../Header/Usermenu';
import Navdrop from '../Header/Navdrop';

import Categories from '../Categories';

import './style.scss';



const App = () => {
    // const dispatch = useDispatch();

    const loadingStatus = useSelector((state)=>(state.home.loading));
    
    // useEffect(() => (dispatch({type: 'TOGGLE_LOADING'})), []);

    return (
        <div className="app">
            {loadingStatus && <Loader />}    
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

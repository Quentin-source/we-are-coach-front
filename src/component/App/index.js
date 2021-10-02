import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Loader from '../Loading';
import Home from '../Home';
import Header from '../Header';
import Footer from '../Footer';

import Usermenu from '../Header/Usermenu';
import Navdrop from '../Header/NavDrop';

import './style.scss';
import Trainings from '../Trainings';
import TrainingDetails from '../TrainingDetails';

import './style.scss';


const App = () => {
    return (
        <div className="app">
            <Loader />    
            <div className="app-header">
                <Header />
                <Usermenu />
                <Navdrop />
            </div>
            <Switch>
                <Route path="/" exact>
                    <Home />    
                </Route>
                <Route path="/Entrainements" exact>
                    <Trainings />    
                </Route>
                <Route path="/Contacts" exact>
                    <TrainingDetails />
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

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

import './style.scss';

import CreateTraining from '../CreateTrainings';


const App = () => {
    const dispatch = useDispatch();
    // dispatch({type:'LOADING_ON'});
    dispatch({type:'API_LOG'});   

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
                
                </Route>
                <Route path="/CreerEntrainement" exact>
                    <CreateTraining />
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

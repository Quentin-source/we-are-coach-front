import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Loader from '../Loading';
import Home from '../Home';
import Header from '../Header';
import Footer from '../Footer';
import Profile from '../Profile';



import './style.scss';
import Trainings from '../Trainings';
import TrainingDetails from '../TrainingDetails';

import './style.scss';

import CreateTraining from '../CreateTrainings';
import { useEffect } from 'react';


const App = () => {
    const dispatch = useDispatch();
    const match = useRouteMatch();
    useEffect(()=>{
        dispatch({type: 'FETCH_COMMON'});
    },[]);

    return (
        <div className="app">
            <Loader />    
            <Header />    
            <Switch>
                <Route path="/" exact>
                    <Home />    
                </Route>
                <Route path="/Entrainement" exact>
                    <Trainings />    
                </Route>
                <Route path="/Entrainement/:slug" exact>
                    <TrainingDetails />
                </Route>
                <Route path="/Utilisateur" exact>
                    <Profile/>
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

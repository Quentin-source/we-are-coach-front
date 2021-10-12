import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Loader from '../Loading';
import Home from '../Home';
import Header from '../Header';
import Footer from '../Footer';



import './style.scss';
import Trainings from '../Trainings';
import TrainingDetails from '../TrainingDetails';

import './style.scss';

import CreateTraining from '../CreateTrainings';
import { useEffect } from 'react';

import Contact from '../Contact';
import AboutUs from '../AboutUs';
import CGU from '../CGU';
import FAQ from '../FAQ';


const App = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch({type: 'FETCH_COMMON'});
    });

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
                <Route path="/Contacts" exact>
                    <Contact />
                </Route>
                <Route path="/Entrainement/:slug" exact>
                    <TrainingDetails />
                </Route>
                <Route path="/CreerEntrainement" exact>
                    <CreateTraining />
                </Route>
                <Route path="/AboutUs" exact>
                    <AboutUs />
                </Route>
                <Route path="/CGU" exact>
                    <CGU />
                </Route>
                <Route path="/FAQ" exact>
                    <FAQ />
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

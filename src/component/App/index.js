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


const App = () => {
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
                <Route>
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </div>
    );    
}

export default App;

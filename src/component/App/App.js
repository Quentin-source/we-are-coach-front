
import './App.scss';
import Home from '../Home';
import Header from '../Header';
import Footer from '../Footer';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
        <Route>
          <Home />
        </Route>
      <Footer />
    </div>
  );
}

export default App;

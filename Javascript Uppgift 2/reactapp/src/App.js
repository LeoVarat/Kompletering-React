import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

//Routes
import Products from './views/Products';
import Home from './views/Home';


//Components
import Notfound from './views/Notfound';

function App() {
  return (

      <BrowserRouter>
        <Switch>
          <Route path="/products" exact component={Products}/>
          <Route path="/" exact component={Home} />
          <Route path="*" exact component={Notfound} />
        </Switch>
      </BrowserRouter>

  );
}

export default App;

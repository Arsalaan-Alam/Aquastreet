import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from  "react-router-dom";
import Slider from './Components/slider';
import Map from './Components/Map';

function App() {

  
  

  return (
    <div className="App">
      <div className="App-container">
        
          <Router>
          <Switch>
            
            <Route exact path="/map">
               <Map />
            </Route>
            <Route path="/">
              <Slider />
            </Route>
             
          
            </Switch>
          </Router>
       
      
      </div>
     
    </div>
  );
}

export default App;

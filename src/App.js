
import Home from "./pages/Home"
import Series from "./pages/Series"
import Movies from "./pages/Movies"
import Error from "./pages/error"
import { Route, Switch } from "react-router-dom"
import "./App.css"
function App() {
  return (
    <div>
  
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/series" component={Series} />
        <Route path='*' exact={true} component={Error} />
        
      </Switch>



    </div>
  );
}

export default App;

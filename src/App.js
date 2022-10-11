import Nav from "./components/nav/Nav";
import First from "./components/body/First";
import Second from "./components/sec/Second";
import Three from "./components/third/Three";
import Four from "./components/forth/Four";
import Five from "./components/fifth/Five";
import Six from "./components/sixth/Six";
import Nine from "./components/ninth/Nine";
import Ten from "./components/tenth/Ten"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import "./app.css";
import Eleven from "./components/elventh/Eleven";
const App = () => {
  return <div>
    <Router>
      <Switch>
        <div>
        <Nav />
        <First />
        <Ten />
        <Second />
        <Three />
        <Four />
        <Five />

        <Six />
        <Eleven />
        <Nine />
        </div>

      </Switch>
    </Router>
  </div>;
};

export default App;
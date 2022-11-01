import Nav from "./components/nav/Nav";
import First from "./components/body/First";
import Second from "./components/sec/Second";
import Three from "./components/third/Three";
import Four from "./components/forth/Four";
import Five from "./components/fifth/Five";
import Six from "./components/sixth/Six";
import Nine from "./components/ninth/Nine";
import Ten from "./components/tenth/Ten"
import "./spp.scss";
import "./app.css";
import Eleven from "./components/elventh/Eleven";
const App = () => {

  const w = window.innerWidth;
  const h = window.innerHeight;
  return <>
    <div className="app">
      
        
    <div className="section">
          <Nav />
          <First width={w} height={h} />
          <Ten />
          <Second />
          <Three />
          <Four />
          <Five />

          <Six />
          <Eleven />
          <Nine />
       </div>
      </div>





  </>;
};

export default App;
import "./App.css";
import Camera from "./component/Camera";
import Cards from "./component/Cards/index";
import Footter from "./component/Footer/index";
import Header from "./component/Header/index";
import Intro from "./component/Intro/index";
import Lists from "./component/Lits/index";
import Mount from "./component/Mount/index";
import Mounts from "./component/Mounts/index";
import Sponsers from "./component/Sponsors/index";
import BeforeFooter from "./component/beforeFooter/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Cards />
      <Mounts />
      <Camera />
      <Lists />
      <Sponsers />
      <Mount />
      <BeforeFooter />
      <Footter />
    </div>
  );
}

export default App;

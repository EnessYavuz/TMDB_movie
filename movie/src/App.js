import {Route,Routes} from "react-router-dom"
import './App.css';
import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import Add from "./components/Add";
import "./lib/fontawesome/css/all.min.css"
import GlobalState from "./context/GlobalState";

function App() {
  return (
    <GlobalState>
    <div className="App">
      <Routes>
        <Route path="/" element={<WatchList/>}/>
        <Route path="/watched" element={<Watched/>}/>
        <Route path="/add" element={<Add/>}/>
      </Routes>
    </div>
    </GlobalState>
  );
}

export default App;

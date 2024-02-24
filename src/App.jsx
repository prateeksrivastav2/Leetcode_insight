import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EntryPage from "./components/EntryPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Comparison from './components/Comparisons'
import Getdata from './state/fetchdata'
// import Getdata2 from './state/Fetchdata2'
import Navbar from "./components/Navbar";
import Scoregenerator from './components/Scoregenerator';

function App() {
  return (
    <>
      {/* <Getdata2> */}
      <Getdata>
      <Router>
    <Navbar/>
        <Routes>
          <Route exact path="/" element={<EntryPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/Scoregenerator" element={<Scoregenerator/>} />
          <Route exact path="/comparisons" element={<Comparison />} />
        </Routes>
        </Router>
      </Getdata>
      {/* </Getdata2> */}
    </>
  );
}

export default App;

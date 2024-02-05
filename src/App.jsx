import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EntryPage from "./components/EntryPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Comparison from './components/Comparisons'
import Getdata from './state/fetchdata'

function App() {
  return (
    <>
      <Getdata>
      <Router>
        <Routes>
          <Route exact path="/" element={<EntryPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/comparison" element={<Comparison />} />
        </Routes>
        </Router>
      </Getdata>
    </>
  );
}

export default App;

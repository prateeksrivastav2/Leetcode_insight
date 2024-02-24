import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EntryPage from "./components/EntryPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Comparison from "./components/Comparisons";
import Getdata from "./state/fetchdata";
import Navbar from "./components/Navbar";
import Scoregenerator from "./components/Scoregenerator";
import About from "./components/About";

function App() {
  return (
    <>
      <Getdata>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<EntryPage />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/Scoregenerator" element={<Scoregenerator />} />
            <Route exact path="/comparisons" element={<Comparison />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
      </Getdata>
    </>
  );
}

export default App;

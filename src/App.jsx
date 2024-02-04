import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EntryPage from "./components/EntryPage";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      First commit
      <Router>
        <Routes>
          <Route exact path="/" element={<EntryPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

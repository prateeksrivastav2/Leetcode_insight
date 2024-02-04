<<<<<<< HEAD
import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EntryPage from "./components/EntryPage";

import 'bootstrap/dist/css/bootstrap.min.css';
=======
import { useState } from 'react'
import './App.css'
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Getdata from './state/fetchdata'
>>>>>>> 186f4dadf971ec824bf91870df336d66258aec3e

function App() {
  return (
    <>
<<<<<<< HEAD
      First commit
      <Router>
        <Routes>
          <Route exact path="/" element={<EntryPage />} />
        </Routes>
      </Router>
=======
      <Getdata>
        <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        </Router>
      </Getdata>
>>>>>>> 186f4dadf971ec824bf91870df336d66258aec3e
    </>
  );
}

export default App;

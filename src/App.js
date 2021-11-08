import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';
import SkillSearch from './components/SkillSearch';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  let api = 'https://engrc3350-user-app.herokuapp.com/test/';
  let output;

  fetch(api)
    .then(res => res.json())
    .then(
      (result) => {
        output = result.result;
      },
      (error) => {
        console.log(error);
      }
    );

  return (
    <Router>
      <div className="App">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link to="/" class="nav-link active" aria-current="page">To Home</Link>
                <Link to="/about" class="nav-link active" aria-current="page">To About</Link>
                <Link to="/contact" class="nav-link active" aria-current="page">To Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route exact path='/' element={<SkillSearch />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
        </Routes>

        {/* <p>{output}</p> */}

      </div>
    </Router>
  );
}

export default App;

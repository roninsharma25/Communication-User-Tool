import React from 'react';
import home_page_pic from '../home_page_pic.png';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Button
} from 'react-router-dom';
import SkillSearch from './SkillSearch';
import ResumeAnalysis from './ResumeAnalysis';

function Home() {
    return (
        // <Router>
        <div>
            <div class="title-container">
                <h1 id="home-title">Find your communication skills gap</h1>
            </div>
            <div class="pic_and_buttons">
                <img src={home_page_pic} className="home_page_pic" alt="home page picture" />
                {/* <div class="feature_buttons"> */}
                <div class="skill-search-button feature-buttons">
                    <Link to="/skill-search" ><button type="button" class="btn btn-primary home-buttons">Skill Search</button></Link>
                    <p>TESTING TESTING 123 TESTING TESTING 123 TESTING TESTING 123 TESTING TESTING 123 TESTING TESTING 123 TESTING TESTING 123 TESTING TESTING 123 TESTING TESTING 123</p>
                </div>
                <div class="resume-analysis-button feature-buttons">
                    <Link to="/resume-analysis" ><button type="button" class="btn btn-primary home-buttons">Resume Analysis</button></Link>
                    <p>TESTING TESTING 123 TESTING TESTING 123 TESTING TESTING 123 TESTING TESTING 123 TESTING TESTING 123 TESTING TESTING 123 TESTING TESTING 123 TESTING TESTING 123</p>
                </div>
                {/* </div> */}
            </div>

            <Routes>
                {/* <Route exact path='/' element={<Home />}></Route> */}
                <Route exact path='/skill-search' element={<SkillSearch />}></Route>
                <Route exact path='/resume-analysis' element={<ResumeAnalysis />}></Route>
                {/* <Route exact path='/about' element={<About />}></Route> */}
            </Routes>

        </div>
        // </Router>
    )
}
export default Home;
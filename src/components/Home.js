// import React from 'react';
// import home_page_pic from '../home_page_pic.png';
// import {
//     BrowserRouter as Router,
//     Route,
//     Link,
//     Routes,
//     Button
// } from 'react-router-dom';
// import SkillSearch from './SkillSearch';
// import ResumeAnalysis from './ResumeAnalysis';

// function Home() {
//     return (
//         // <Router>
//         <div>
//             <div class="title-container">
//                 <h1 id="home-title">Find your communication skills gap</h1>
//             </div>
//             <div class="pic_and_buttons">
//                 <img src={home_page_pic} className="home_page_pic" alt="home page picture" />
//                 {/* <div class="feature_buttons"> */}
//                 <div class="skill-search-button feature-buttons">
//                     <Link to="/skill-search" ><button type="button" class="btn btn-primary home-buttons">Skill Search</button></Link>
//                     <p>TESTING TESTING 123 TESTING TESTING 123 TESTING TESTING 123 TESTING TESTING 123 TESTING TESTING 123 TESTING TESTING 123 TESTING TESTING 123 TESTING TESTING 123</p>
//                 </div>
//                 <div class="resume-analysis-button feature-buttons">
//                     <Link to="/resume-analysis" ><button type="button" class="btn btn-primary home-buttons">Resume Analysis</button></Link>
//                     <p>TESTING TESTING 123 TESTING TESTING 123 TESTING TESTING 123 TESTING TESTING 123 TESTING TESTING 123 TESTING TESTING 123 TESTING TESTING 123 TESTING TESTING 123</p>
//                 </div>
//                 {/* </div> */}
//             </div>

//             <Routes>
//                 {/* <Route exact path='/' element={<Home />}></Route> */}
//                 <Route exact path='/skill-search' element={<SkillSearch />}></Route>
//                 <Route exact path='/resume-analysis' element={<ResumeAnalysis />}></Route>
//                 {/* <Route exact path='/about' element={<About />}></Route> */}
//             </Routes>

//         </div>
//         // </Router>
//     )
// }
// export default Home;

import React from 'react';
import home_page_pic from '../home_page_pic.png';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from 'react-router-dom';
import SkillSearch from './SkillSearch';
import ResumeAnalysis from './ResumeAnalysis';

function Home() {
    return (
        // <Router>
        <div>
            <div class="title-container">
                <h1 id="home-title">Find your engineering communication skills gap</h1>
            </div>
            <div class="pic_and_buttons">
                <img src={home_page_pic} className="home_page_pic" alt="home page picture" />
                {/* <div class="feature_buttons"> */}
                <div class="skill-search-button feature-buttons">
                    <Link to="/skill-search" ><button type="button" class="btn btn-primary home-buttons">Skill Search</button></Link>
                    <p>Search for your interested engineering job to see the most important skills required.</p>
                </div>
                <div class="resume-analysis-button feature-buttons">
                    <Link to="/resume-analysis" ><button type="button" class="btn btn-primary home-buttons">Resume Analysis</button></Link>
                    <p>Evaluate your resume to improve on demonstrating your communication and collaboration skills.</p>
                </div>
                {/* </div> */}
            </div>
            <div className="directions">
                <h3>Directions</h3>
                <p className="home_text">You can choose an interested job from our selection of 18 engineering job titles in 4 engineering job categories, to learn about the top most commonly required communication skills for that job.</p>
                <p className="home_text">OR</p>
                <p className="home_text">You can share with us your resume along with a job title or a job description, and we will show you an evaluation score and the most required communication skills for that job.</p>
                <p className="home_text">Also, feel free to check out our team!</p>
            </div>
            <div className="purpose">
                <h3>Purpose Statement</h3>
                <p className="home_text">This Communication Job Skills tool aims at providing career-seeking engineering students with a way to gain a better understanding of what communication skills employers are looking for in a candidate so that users can evaluate and improve their own resumes and skill sets.</p>
            </div>
            <div className="background">
                <h3>Background</h3>
                <div className="home_text">
                    <p>Engineering students face a lack of technical communication skills in line with job requirements, reflected by both students in the recruitment process and alumni in the workforce [<a href="https://onlinelibrary.wiley.com/doi/10.1002/j.2168-9830.2001.tb00660.x">1</a>, <a href="https://ieeexplore.ieee.org/document/6087194/">2</a>]. They want to gain a better understanding of their skill mismatches in order to avoid negative impacts on job performance [<a href="https://www.emerald.com/insight/content/doi/10.1108/IJM-05-2013-0116/full/html">3</a>].</p>
                    <p>This tool consists of two main functionalities on career type skills search and resume analysis. </p>
                    <p>Communication and collaboration skills data used for this project was scraped from 5,994 engineering job ads by an undergraduate engineering research team at Cornell University. Report for the previous research project can be found <a href="https://drive.google.com/file/d/13VSAlBt_k6wYfMksJTGsGDa3mego7EUE/view">here</a>.</p>
                </div>
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
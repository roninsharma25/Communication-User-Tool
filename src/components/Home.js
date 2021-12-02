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
                <p className="home_text dir">This tool consists of two main functionalities: a skill search and a resume analysis. We recommend that you start off with the Skill Search and finish with the Resume Analysis.</p>
                <p className="home_text dir">Skill search: Choose a job you are interested in from our selection of 18 engineering job titles in 4 engineering job categories (data engineering, financial engineering, hardware and technical engineering, and software engineering). After making your selection, our tool will show you a graph of the communication skills that show up most often in job ads for the selected job field so you can learn about the most important communication skills for that job.</p>
                <p className="home_text dir">OR</p>
                <p className="home_text dir">Resume analysis: Paste the content of your resume into our tool along with a job title or job description, and we will give you a score showing how successful your resume is in reflecting your communication skills. We will also show a graph comparing the most commonly appearing communication skills in ads for the selected job with how frequently the skill appears in your resume, so that you can reflect on your own communication skills and resume and make changes accordingly!</p>
                <p className="home_text">Also, feel free to check out our team on the About Us page!</p>
            </div>
            <div className="purpose">
                <h3>Purpose Statement</h3>
                <p className="home_text">This Communication Job Skills tool aims at providing career-seeking engineering students with a way to gain a better understanding of what communication skills employers are looking for in a candidate so that users can evaluate and improve their own resumes and skill sets.</p>
            </div>
            <div className="background">
                <h3>Background</h3>
                <div className="home_text">
                    <p>Engineering students face a lack of technical communication skills in line with job requirements, reflected by both students in the recruitment process and alumni in the workforce [<a href="https://onlinelibrary.wiley.com/doi/10.1002/j.2168-9830.2001.tb00660.x">1</a>, <a href="https://ieeexplore.ieee.org/document/6087194/">2</a>]. They want to gain a better understanding of their skill mismatches in order to avoid negative impacts on job performance [<a href="https://www.emerald.com/insight/content/doi/10.1108/IJM-05-2013-0116/full/html">3</a>].</p>
                    <p>According to many engineering executives, communication skills play a critical role in both the hiring process for applicants, as well as the success and advancement of an engineer in their professional career [<a href="https://onlinelibrary.wiley.com/doi/10.1002/j.2168-9830.2001.tb00660.x">1</a>]. However, it has been found that engineers are unhappy with the level of their communication skills in their professions, despite the fact that approximately 64% of their time working is spent communicating [<a href="https://onlinelibrary.wiley.com/doi/10.1002/j.2168-9830.2001.tb00660.x">1</a>]. Research has also shown that employers are generally dissatisfied with the technical communication skills of newly hired college graduate employees in multiple areas, including verbal and written communication, self-expression, and electronic media [<a href="https://onlinelibrary.wiley.com/doi/10.1002/j.2161-1920.2005.tb00893.x">4</a>]. However, since engineering careers require strong communication skills in order to be successful, and long-term job success is significantly more dependent on the presence of soft-skills than technical skills [<a href="https://www.proquest.com/docview/1434861330">5</a>], these students are unfortunately not fulfilling their potential to succeed in the workplace. This unfulfilled potential may stem from the fact that engineering students typically do not realize the importance of building their communication skills, instead focusing on building strong technical skills, since many students do not recognize the communication skills needed for their desired career [<a href="https://peer.asee.org/why-industry-says-that-engineering-graduates-have-poor-communication-skills-what-the-literature-says">6</a>]. It has also been found that colleges are often limited in their teaching of technical writing courses aimed at preparing engineering students for communication in a professional setting [<a href="https://ieeexplore.ieee.org/document/6087194">7</a>]</p>
                </div>
            </div>
            <div className="project_scope">
                <h3>Project Scope</h3>
                <div className="home_text">
                    <p>As skill mismatches often lead to negative impacts on job performance [<a href="https://www.emerald.com/insight/content/doi/10.1108/IJM-05-2013-0116/full/html">8</a>], we’re offering a solution that will help students gain a better understanding of the communication skills necessary for certain careers. This platform highlights that communication skills act as tools that connect one’s technical capabilities to future success in engineering professions [<a href="https://www.researchgate.net/publication/259706644_Engineering_communication_and_the_global_workplace_Preparing_professionals_and_global_citizens">9</a>]. Although this project currently doesn’t address how engineering students should improve on their communication skills, it achieves the initial objective of emphasizing the importance of communication capabilities in the workplace and will encourage the engineering students to strengthen their desired talents. In addition to this, the content provided by our tool is based on data from a limited number of job ads posted within a specific period of time. So, the information we provide is limited to the job fields and ads covered by this data.</p>
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
// import React from 'react';
// import ds_headshot from '../Danielle_Simon_Headshot.png';
// import Member from './Member';

// function About() {
//     return <div>
//         <p>TESTING ABOUT US PAGE</p>
//         <div className="team_members">
//             <div className="row">
//                 <Member name="Allison Hutchison" pic={ds_headshot} />
//                 <Member name="Danielle Simon" pic={ds_headshot} />
//                 <Member name="Nina Xie" pic={ds_headshot} />
//                 <Member name="William Evans" pic={ds_headshot} />
//                 {/* <img src={ds_headshot} alt="Allison Hutchison's Headshot" className="headshots" />
//                 <img src={ds_headshot} alt="Danielle Simon's Headshot" className="headshots" />
//                 <img src={ds_headshot} alt="Nina Xie's Headshot" className="headshots" />
//                 <img src={ds_headshot} alt="William Evans's Headshot" className="headshots" /> */}
//             </div>
//             <div className="row">
//                 <Member name="Ronin Sharma" pic={ds_headshot} />
//                 <Member name="Neil Madhavani" pic={ds_headshot} />
//                 <Member name="Paul Beck" pic={ds_headshot} />
//                 {/* <img src={ds_headshot} alt="Ronin Sharma's Headshot" className="headshots" />
//                 <img src={ds_headshot} alt="Neil Madhavani's Headshot" className="headshots" />
//                 <img src={ds_headshot} alt="Paul Beck's Headshot" className="headshots" /> */}
//             </div>
//         </div>
//     </div>
// }

// export default About;

import React from 'react';
import ah_headshot from '../Allison_Hutchison_Headshot.png';
import ds_headshot from '../Danielle_Simon_Headshot.png';
import nx_headshot from '../Nina_Headshot.JPG';
import we_headshot from '../Will_Headshot.jpeg';
import rs_headshot from '../Ronin_Headshot.jpg';
import nm_headshot from '../Neil_Headshot.jpg';
import pb_headshot from '../Paul_Headshot.jpeg';
import Member from './Member';

function About() {

    const ah_bio = "I earned a PhD from the Rhetoric & Writing program at Virginia Tech. I love technical and engineering communication, writing centers, and music. I am an experienced educator in both online and face-to-face settings with a strong passion for student engagement and success. My pedagogical axiom is, 'If we're not having fun, we're not doing it right.'";
    const ds_bio = "I am currently a senior studying Computer Science in the College of Engineering, and will be working as a full-time Software Developer after graduating in May 2022. I am interested in full stack development, and have prior experience in the field from past internships, clubs, and classes. Outside of school, I enjoy playing soccer and practicing juggling!"
    const nx_bio = "I’m a senior majoring in Information Science in the College of Engineering. I’m pursuing a career in product management with experience in UX design, data analysis, and frontend development. Besides a PM, I’m also a foodie, music enthusiast, and movie addict."
    const we_bio = "I am currently a senior double majoring in Engineering Physics and Computer Science in Cornell’s College of Engineering. I will be working as a software engineer after graduating in May 2022. Concerning extracurriculars, I really enjoy mentoring and playing soccer."
    const rs_bio = "I am a Senior Electrical & Computer Engineering major in the College of Engineering. I have prior internship experience in Data Science and Cloud Analytics, and will be an MEng student following my graduation in May 2022. Outside of school, I plays badminton and tennis."
    const nm_bio = "I am a Senior Computer Science major in the College of Engineering. I have prior internship experience in Data Science and Software Engineering, and will be a Software Engineer following my graduation in May 2022. Outside of school, I plays golf and Squash."
    const pb_bio = "I am a Senior Applied Engineering Physics major in the College of Engineering. I have prior internship experience in Python and Matlab, and will be an MEng student following my graduation in May 2022. Outside of school, I enjoy weightlifting."

    return <div>
        <h1 className="about_header">The ENGRC 3350 Communication Skills Tool Team</h1>
        <p>We are a group of engineering students from the ENGRC 3350: Organization Communications for Engineers class at Cornell University in the Fall 2021 semester.</p>
        <div className="team_members">
            <div className="row row1">
                <Member name="Allison Hutchison, PhD" title="ENGRC 3350 Professor" pic={ah_headshot} bio={ah_bio} info="Senior Lecturer, Engineering Communications Program" />
                <Member name="Danielle Simon" title="Frontend Devloper" pic={ds_headshot} bio={ds_bio} info="CS '22" />
                <Member name="Nina Xie" pic={nx_headshot} title="Designer" bio={nx_bio} info="ISST '22" />
                <Member name="William Evans" title="Frontend Devloper" pic={we_headshot} bio={we_bio} info="CS '22" />
            </div>
            <div className="row row2">
                <Member name="Ronin Sharma" pic={rs_headshot} title="Backend Devloper" bio={rs_bio} info="CS '22" />
                <Member name="Neil Madhavani" pic={nm_headshot} title="Backend Devloper" bio={nm_bio} info="CS '22" />
                <Member name="Paul Beck" pic={pb_headshot} title="Backend Devloper" bio={pb_bio} info="CS '22" />
                {/* <img src={ds_headshot} alt="Ronin Sharma's Headshot" className="headshots" />
               <img src={ds_headshot} alt="Neil Madhavani's Headshot" className="headshots" />
               <img src={ds_headshot} alt="Paul Beck's Headshot" className="headshots" /> */}
            </div>
        </div>
        <div className="conlusions">
            <h3>Conclusions</h3>
            <p className="home_text conc">This tool highlights the importance of identifying and improving specific communication and collaboration skills for an engineering career path. By doing so, our end-users will further comprehend the importance of having strong communication skills to perform well in the workplace.</p>
            <p className="home_text conc">As you have explored the skills required by your desired jobs, you can equip yourself with more relevant experience. Additionally, you now know how to improve your resume, cover letter, and other materials to better demonstrate your communication and collaboration skills and to become stronger applicants and engineers. </p>
            <p className="home_text conc last">Our tool will help you become better prepared to showcase your skills in a professional setting through addressing the gaps of communication skills to improve upon.</p>
        </div>
    </div>
}

export default About;
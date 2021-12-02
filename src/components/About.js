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
import pb_headshot from '../Paul_Headshot.jpg';
import Member from './Member';

function About() {

    const ah_bio = "I earned a PhD from the Rhetoric & Writing program at Virginia Tech. I love technical and engineering communication, writing centers, and music. I am an experienced educator in both online and face-to-face settings with a strong passion for student engagement and success. My pedagogical axiom is, 'If we're not having fun, we're not doing it right.'";
    const ds_bio = "I am currently a senior studying Computer Science in the College of Engineering at Cornell. I am pursuing a career in software engineering, and will be working as a full-time Software Developer after graduating in May 2022. I am interested in full stack development, and have prior experience in the field from past internships, clubs, and classes. Outside of school, I enjoy playing soccer and practicing juggling!"
    const nx_bio = "I’m a senior majoring in Information Science in the College of Engineering. I’m pursuing a career in product management with experience in UX design, data analysis, and frontend development. Besides a PM, I’m also a foodie, music enthusiast, and movie addict."
    const we_bio = "N/A"
    const rs_bio = "Ronin Sharma is a Senior Electrical & Computer Engineering major in the College of Engineering. He has prior internship experience in Data Science and Cloud Analytics, and will be an MEng student following his graduation in May 2022. Outside of school, Ronin plays badminton and tennis."
    const nm_bio = "Neil Madhavani is a Senior Computer Science major in the College of Engineering. He has prior internship experience in Data Science and Software Engineering, and will be a Software Engineer following his graduation in May 2022. Outside of school, Neil plays golf and Squash."
    const pb_bio = "Paul Beck is a Senior Applied Engineering Physics major in the College of Engineering. He has prior internship experience in Python and Matlab, and will be an MEng student following his graduation in May 2022. Outside of school, Paul deadlifts 580 lbs everyday."

    return <div>
        <h1 className="about_header">The ENGRC 3350 Team</h1>
        <div className="team_members">
            <div className="row row1">
                <Member name="Allison Hutchison, PhD" pic={ah_headshot} bio={ah_bio} info="Senior Lecturer, Engineering Communications Program" />
                <Member name="Danielle Simon" pic={ds_headshot} bio={ds_bio} info="CS '22" />
                <Member name="Nina Xie" pic={nx_headshot} bio={nx_bio} info="ISST '22" />
                <Member name="William Evans" pic={we_headshot} bio={we_bio} info="CS '22" />
            </div>
            <div className="row row2">
                <Member name="Ronin Sharma" pic={rs_headshot} bio={rs_bio} info="CS '22" />
                <Member name="Neil Madhavani" pic={nm_headshot} bio={nm_bio} info="CS '22" />
                <Member name="Paul Beck" pic={pb_headshot} bio={pb_bio} info="CS '22" />
                {/* <img src={ds_headshot} alt="Ronin Sharma's Headshot" className="headshots" />
               <img src={ds_headshot} alt="Neil Madhavani's Headshot" className="headshots" />
               <img src={ds_headshot} alt="Paul Beck's Headshot" className="headshots" /> */}
            </div>
        </div>
    </div>
}

export default About;
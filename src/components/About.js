import React from 'react';
import ds_headshot from '../Danielle_Simon_Headshot.png';
import Member from './Member';

function About() {
    return <div>
        <p>TESTING ABOUT US PAGE</p>
        <div className="team_members">
            <div className="row">
                <Member name="Allison Hutchison" pic={ds_headshot} />
                <Member name="Danielle Simon" pic={ds_headshot} />
                <Member name="Nina Xie" pic={ds_headshot} />
                <Member name="William Evans" pic={ds_headshot} />
                {/* <img src={ds_headshot} alt="Allison Hutchison's Headshot" className="headshots" />
                <img src={ds_headshot} alt="Danielle Simon's Headshot" className="headshots" />
                <img src={ds_headshot} alt="Nina Xie's Headshot" className="headshots" />
                <img src={ds_headshot} alt="William Evans's Headshot" className="headshots" /> */}
            </div>
            <div className="row">
                <Member name="Ronin Sharma" pic={ds_headshot} />
                <Member name="Neil Madhavani" pic={ds_headshot} />
                <Member name="Paul Beck" pic={ds_headshot} />
                {/* <img src={ds_headshot} alt="Ronin Sharma's Headshot" className="headshots" />
                <img src={ds_headshot} alt="Neil Madhavani's Headshot" className="headshots" />
                <img src={ds_headshot} alt="Paul Beck's Headshot" className="headshots" /> */}
            </div>
        </div>
    </div>
}

export default About;
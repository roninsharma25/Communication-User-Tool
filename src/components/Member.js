import React from 'react';
// import ds_headshot from '../Danielle_Simon_Headshot.png';

export default function Member(props) {
    var name = props.name + "'s Headshot"
    return (
        <div className="member">
            <img src={props.pic} alt={name} className="headshots" />
        </div>
    )
}


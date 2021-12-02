// import React from 'react';
// // import ds_headshot from '../Danielle_Simon_Headshot.png';

// export default function Member(props) {
//     var name = props.name + "'s Headshot"
//     return (
//         <div className="member">
//             <img src={props.pic} alt={name} className="headshots" />
//         </div>
//     )
// }



import React from 'react';
// import ds_headshot from '../Danielle_Simon_Headshot.png';

export default function Member(props) {
    var name = props.name + "'s Headshot"
    return (
        <div className="member">
            <img src={props.pic} alt={name} className="headshots" />
            <p className="name">{props.name}</p>
            <p className="info">{props.info}</p>
            <p className="bio">{props.bio}</p>
        </div>
    )
}

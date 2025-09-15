import User from "./User";
import UserClass from "./UserClass";


import React, { Component } from 'react';

class About extends Component {
 
    constructor(props) {
        super(props);
        //console.log("constructer parent")
    }

    componentDidMount() {
        //console.log("Parent Mounted");
    }
    render() {
        //console.log("render parent")
        return (
            <div className="about">
        
            <h1>About Us</h1>
            <p>Thank you for visiting our website!</p>
            {/* <User  name = {"Urmi "} location={"India"} contact={"123-456-7890"}/> */}
             <UserClass />
             
        </div>
 );
}
}
// export const About = () => {
//     return (
//        <div className="about">
//             <h1>About Us</h1>
//             <p>Thank you for visiting our website!</p>
//             <User  name = {"Urmi "} location={"India"} contact={"123-456-7890"}/>
//             <UserClass name = {"Urmi "} location={"India"} />
//         </div>
//     );
// };

export default About;
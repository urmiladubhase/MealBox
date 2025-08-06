import User from "./User";
import UserClass from "./UserClass";
export const About = () => {
    return (
       <div className="about">
            <h1>About Us</h1>
            <p>Thank you for visiting our website!</p>
            <User  name = {"Urmi "} location={"India"} contact={"123-456-7890"}/>
            <UserClass name = {"Urmi "} location={"India"} />
        </div>
    );
};

export default About;
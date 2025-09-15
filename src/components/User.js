import { use } from "react"
import React, { useState } from 'react';

const User = (props) => {
    const [count, setCount] =useState(0);
    return(
        <div className="user-card">
            {/* <h2>Count : {count} </h2>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <h2>Name : {props.name}</h2>
            <h3>Location : {props.location}</h3>
            <h4>Contact : {props.contact}</h4> */}
        </div>
    );
};

export default User;
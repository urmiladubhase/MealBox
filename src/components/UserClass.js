import React from 'react';
export class UserClass extends React.Component{
    constructor(props){
        super(props);
        //console.log(props);
        this.state ={
            count: 0,
            userInfo:{}
        }
        
    }
    async componentDidMount() {
        //console.log("child Mounted");
        const data = await fetch("https://api.github.com/users/urmiladubhase");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json,
        
        })
    }
    render(){
        const {name, id, location} = this.state.userInfo;
        //const {count} = this.state;
        //console.log("UserClass Rendered");
        return(
            <div className="user-card">
                {/* <h2>Count : {count} </h2>
                <button onClick={() => this.setState({count: count + 1})}>Increment Count</button>
                <h2>Name : {name}</h2> */}
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : 123-456-7890 (class)</h4>
                <h4>ID : {id}</h4>
            </div>
        );
    }
}

export default UserClass;

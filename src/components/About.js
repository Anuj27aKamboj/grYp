import React, {Component} from "react";
import UserComponent from "./UserComponent";

class About extends Component{
  constructor(props){
    super(props);

    console.log("Parent Constructor")
  }

  componentDidMount(){
    console.log("Parent Mounted")
  }

  render(){
    console.log("Parent Render")
    return (
    <div>
      <div className="about-content">
        <h1>About Us</h1>
        <UserComponent name={"First"}/>
      </div>
    </div>
  );
  }
}


export default About;

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
      <div className="w-[80%] p-5 mx-auto mt-[150px] flex justify-center content-center">
        <h1 className="w-[200px] mx-auto">About Us</h1>
        <UserComponent name={"First"}/>
      </div>
    </div>
  );
  }
}


export default About;

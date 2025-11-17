import React, {Component} from "react";
import UserComponent from "./UserComponent";
import UserContext from "../../utils/UserContext";

class About extends Component{
  constructor(props){
    super(props);

    // console.log("Parent Constructor")
  }

  componentDidMount(){
    // console.log("Parent Mounted")
  }

  render(){
    // console.log("Parent Render")
    return (
    <div>
      <div className="w-6/12 p-5 mx-auto mt-[100px] justify-center content-center text-center">
        <h1 className="w-[200px] mx-auto font-extrabold text-4xl">About Us</h1>
        <UserContext.Consumer>
          {({loggedInUser})=> <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
        <UserComponent name={"First"}/>
      </div>
    </div>
  );
  }
}


export default About;

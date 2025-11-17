import React from "react"

class UserComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo: {},
            likeCount: 0, 
        };

        // console.log(this.props.name+" Child Constructor");
    }

    async componentDidMount(){
        const userProfile = await fetch("https://api.github.com/users/Anuj27aKamboj")
        const userJSON = await userProfile.json();

        // console.log(userJSON);
        this.setState(this.state.userInfo = userJSON);

        // console.log(this.props.name+" Child Mounted")
    }

    componentDidUpdate(){
        // console.log(this.props.name+" Child updated")
    }

    componentWillUnmount(){
        // console.log(this.props.name+" Child unmounted")
    }


    render(){
        // const {name} = this.props;
        const {login, avatar_url} = this.state.userInfo;
        const {likeCount} = this.state;

        // console.log(this.props.name+" Child Render")

        return <div className="m-2.5 rounded-[15px]">
            <img className="w-50 h-50 mx-auto rounded-2xl" src={avatar_url}/>
            <h2>{login}</h2>
            <h2>Likes: {likeCount}</h2>
            <button onClick={()=>{
                this.setState({
                    likeCount: this.state.likeCount +1
                })
            }}>👍🏻 </button><span>    </span>
            <button onClick={()=>{
                this.setState({
                    likeCount: this.state.likeCount -1
                })
            }}> 👎🏻</button>
        </div>
    }
}

export default UserComponent;
import React,{Component} from "react";
import Register from "./registerCom";
import LoginCom from "./looginCom";
import UserType from "./userType";
import CreateService from "./createService";

import ServieDetails from "./serviceDetails";
class RegisterMaimCom extends Component{

    state = {
        changeCom  : 0,
        changeUser : 0,
        findLocation:0, // For Create service component to find locations
    }

    handleRegister = () => {
        let s = {...this.state}
        s.changeCom = 1;
        this.setState(s)
    }
    handleLoginHere = () =>
    {
        let s = {...this.state}
        s.changeUser=1;
        this.setState(s);
    }
    handleLogin = () =>
    {
        let s = {...this.state};
        s.changeUser = 2;
        this.setState(s);
    }

    goToCreateService = () =>
    {
        let s = {...this.state};
        s.changeUser=3;
        this.setState(s)
    }

    handleAddService = () => {
        let s = {...this.state};
        s.changeUser=4;
        this.setState(s)
    }

    handleServiceDetails = () =>{
        let s = {...this.state};
        s.changeUser=3;
        this.setState(s);
    }

    // To handle the Available Locations
    handleLocation = () =>{
        let s = {...this.state};
        s.findLocation=1;
        this.setState(s);
    }

    minimisLocation = () =>{
        let s = {...this.state};
        s.findLocation=0;
        this.setState(s);
    }


    render() {
        const {changeCom,changeUser,findLocation}  = this.state;

        return(
            <React.Fragment>
                {changeUser === 0 ?
                <Register 
                changeCom = {changeCom}
                handlePhone = {this.handlePhone}
                handleLoginHere = {this.handleLoginHere}
                handleRegister={this.handleRegister}
                />
                :
                changeUser === 1 ? 
                <UserType 
                handleLogin={this.handleLogin}/>
                :
                changeUser === 2 ?
                <LoginCom 
                goToCreateService={this.goToCreateService}
                />
                :
                changeUser === 3 ?
                <CreateService 
                findLocation={findLocation}
                handleLocation={this.handleLocation}
                minimisLocation={this.minimisLocation}
                handleAddService={this.handleAddService}/>
                :
                <ServieDetails 
                handleServiceDetails={this.handleServiceDetails}/>
                }
            </React.Fragment>
            
        )
    }
}
export default RegisterMaimCom;
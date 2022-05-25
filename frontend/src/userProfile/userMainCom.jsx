import React, {Component} from "react";
import UserProfile from "./userProfile";
import OrderComponent from './orderCom';
import MyServiceCom from './myServiceCom';
import ShowUserProfile from './showUserProfile';

class UserMainCom extends Component{
    state = {
        showOrder : 0,
    }


    handleUserOrder = () =>{
        let s = {...this.state};
        s.showOrder=1;
        this.setState(s);
    }
    backtoOrder = () =>{
        let s = {...this.state};
        s.showOrder=0;
        this.setState(s);
    }

    handleUserService = () =>{
        let s = {...this.state};
        s.showOrder=2;
        this.setState(s);
    }

    backtoMyService = () => {
        let s = {...this.state};
        s.showOrder=0;
        this.setState(s)
    }

    showUserProfile = () =>{
        let s = {...this.state};
        s.showOrder=3;
        this.setState(s);
    }

    render() {

        const {showOrder} = this.state;
        return(
            <React.Fragment>    
            {
                showOrder === 0 ?
            
            <UserProfile 
            handleUserOrder={this.handleUserOrder}
            handleUserService = {this.handleUserService}
            showUserProfile = {this.showUserProfile}
            />
            :
            showOrder === 1 ?
            <OrderComponent 
            backtoOrder = {this.backtoOrder}
            />
            : 
            showOrder === 2 ?
            <MyServiceCom 
            backtoMyService={this.backtoMyService}
            />
            :
            <ShowUserProfile />
            }

            </React.Fragment>
        )
    }
}

export default UserMainCom;
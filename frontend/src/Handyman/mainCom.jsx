import React, {Component} from "react";
import { FaSearch,FaMapMarkerAlt,FaAlignJustify,FaArrowLeft, FaCommentAlt,FaHome } from 'react-icons/fa';
import HomeCom from "./HomeCom";
import ServiceList from "./serviceList";
import ServiceProvider from "./serviceProvider"
import  "./mainCom.css";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
class MainComponent extends Component{
    state ={
        Categories : [
            {items:'Fresh Vegetables', numberOfVender:3, message:'Venders near you'},
            {items:'RO Water Supply', numberOfVender:5, message:'Venders near you'},
            {items:'AC Repair', numberOfVender:8, message:'Venders near you'},
            {items:'Gas Stove Repair', numberOfVender:5, message:'Venders near you'},
            
        ],

        serviceList : [
            {id:1,img:img1 , selName:'Ram Lal Sabzivala', distance:'2 Km far',status:'closed',rating:'5 ratings', items:['Potato,','Onion,','Pudina,','Cauliflower']},
            {id:2,img:img2 , selName:'Sonu Vegetables', distance:'5 Km far',status:'open',rating:'2 ratings', items:['Potato,','Onion,','Pudina,','Cauliflower']},
            {id:3,img:img3, selName:'Rahul Vegetables', distance:'3 Km far',status:'closed',rating:'No ratings yet', items:['Potato,','Onion,','Pudina,','Cauliflower']},
            {id:4,img:img4, selName:'Rakesh Vegetables', distance:'1 Km far',status:'open',rating:'No ratings yet', items:['Potato,','Onion,','Pudina,','Cauliflower']},
        ],
        changeCom : 0,
        currProvider:''
    }


    handleVenders = () =>{
        let s = {...this.state}
        s.changeCom=1;
        this.setState(s)
    }

    handleArrow = () =>{
        let s = {...this.state}
        if(s.changeCom === 1)
        {
            s.changeCom=0;
        }
        else if(s.changeCom === 2)
        {
            s.changeCom=1;
        }
        this.setState(s);
    }

    handleService = (index) =>{
        let s = {...this.state};
        s.changeCom=2;
        s.currProvider=s.serviceList[index]
        console.log(s.currProvider);
        this.setState(s)
    }

    render() {
       const {Categories,changeCom,serviceList,currProvider} = this.state;
        return(
            <React.Fragment>
            <div className="main">
                {
                   changeCom === 0 ?  
    
                <div className="home">
                    <div className="find_any">
                        <div className="findItem">
                            <span className="Search">
                                <FaSearch /></span>
                            <span className="input_value">
                                <input type="text" 
                                name="user"
                                value=""
                                placeholder="Search Anything" 
                                />
                            </span>
                        </div>
                        <div className="location">
                            <span className="location_icons"><FaMapMarkerAlt/></span>
                            <span className="input_value">
                                <input type="text" 
                                name="user"
                                value=""
                                placeholder="Current Locations" 
                                />
                            </span>
                        </div>
                    </div>
                    <p className="category">Categories</p>
                    {Categories.map((num,index) =>(
                        <HomeCom  
                        Categories={num} 
                        key={num.items}
                        index={index}
                        handleVender={this.handleVenders}/>
                    ))}
                </div>

                :
                changeCom === 1 ? 
                <React.Fragment>
                <div className="list">
                    <span className="arrow" onClick={() =>{this.handleArrow()}}><FaArrowLeft/></span>
                    <div className="search_service">
                        <div className="findItem">
                            <span className="Search">
                                <FaSearch /></span>
                            <span className="input_value">
                                <input type="text" 
                                name="user"
                                value=""
                                placeholder="Search Apple" 
                                />
                            </span>
                        </div>
                        <div className="location">
                            <span className="location_icons"><FaMapMarkerAlt/></span>
                            <span className="input_value">
                                <input type="text" 
                                name="user"
                                value=""
                                placeholder="Delivering to 123, ABC Sector" 
                                />
                            </span>
                        </div>
                    </div>
                    
                </div>
                {
                    serviceList.map((num,index)=>(
                       <ServiceList 
                       serviceList={num}
                       key={num.id}
                       index={index}
                       handleSeviceList={this.handleService}
                       /> 
                    ))
                }
                </React.Fragment>
                : 
                <React.Fragment>
                    <div className="provider_main">
                        <div className="service_provider">
                            <span className="arrow" onClick={() =>{this.handleArrow()}}>
                                <FaArrowLeft/>
                            </span>
                        </div>
                        <ServiceProvider 
                            currProvider={currProvider}
                        />
                    </div>
                </React.Fragment>
                }
                <div className="footer_icons">
                    <div className="footer_Icons">
                        <span className="justify"><FaAlignJustify/></span>
                    </div>
                    <div className="footer_Icons">
                        <span className="home_icons"><FaHome /></span>
                    </div>
                    <div className="footer_Icons">
                        <span className="chat_icons"><FaCommentAlt /></span>
                    </div>
                </div>
            </div>    
            </React.Fragment>
        )
    }
}

export default MainComponent;
import React, { Component } from "react";
import "./home.css"
class HomeCom extends Component {
    state = {

    }

    render() {
        const { Categories, index, handleVender } = this.props;
        const{items,numberOfVender,message} = Categories
        return (
            <div className="home">
            <button className="btn" 
            onClick={()=>{handleVender(index)}}>
                <div className="card_body">
                    <div className="card_items">
                        <div className="items_list">{items}</div>
                        <br/><div className="vender">
                            <span className="total_vender">{numberOfVender}</span>
                            <span className="message">{message}</span>
                        </div>
                    </div>
                </div>
            </button>
            </div>
        )
    }
}

export default HomeCom;
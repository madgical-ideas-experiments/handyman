import React from 'react';
import './home.css';
const Home = (props) => {

  const {Categories} = props;
  const{items,numberOfVender,message,img} = Categories
  return (
    <button className='headr_btn'
    style={{ 
      backgroundImage: `url(`+img+`)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat', 
    }}
    onClick={()=>props.handleHome()}>
        <div className='card_body'>
            <div className="card_items">
                <div className="items_list">{items}</div>
            </div>
            <div className='vender'>
                <span className='no_vender'>{numberOfVender}</span>
                <span className='vender_msg'>{message}</span>
            </div>
        </div>
        
    </button>
  )
}

export default Home

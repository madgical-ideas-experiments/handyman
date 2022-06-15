import React from 'react';
import './home.css';
import '../../Style/commonStyle.css';

const Home = (props) => {

  const {Categories} = props;
  const{items,numberOfVender,message,img} = Categories
  return (
    <div className='service_category_list'
    onClick={()=>props.handleHome()}
    style={{ 
      backgroundImage: `url(`+img+`)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat', 
    }}>
    
        <div className='card_body'>
            <div className="card_items">
                <div className="items_list">{items}</div>
            </div>
            <div className='vender'>
                <span className='no_vender'>{numberOfVender}</span>
                <span className='vender_msg'>{message}</span>
            </div>
        </div>
        
    
    </div>
  )
}

export default Home

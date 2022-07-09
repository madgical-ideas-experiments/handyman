import React, { useState } from 'react'
import Service from './Service'
import './myServices.css';
import EditService from '../EditService/EditService';


const MyServices = (props) => {

    const [state, setstate] = useState(0)

    const handleEdit = (Ind) =>{
        setstate(1);
    }


    const { backToProfile,providers } = props
    return (
        <div className='container_div'>

            <div className='heading_block-ele'>
                <img className='backErrow_img'
                    src={require('../../../assets/images/backErrow.png')} alt='back-Errow'
                    onClick={() => backToProfile()}
                />
                {   state === 0 ? 
                    <span className="block-ele-title font-awesome">My Services</span>
                :   ''
                }
            </div>


            {
                state === 0 ?
            <>
            <div className='font-awesome'>
                <span className='create_new-link'>Create New +</span>
            </div>

            <div className='service_block'>
                {providers.map((e,Ind)=>
                <Service  element={e} 
                Ind={Ind}
                handleEdit={handleEdit}/>
                )}
            </div>
            </>
            : 
            <EditService />
            
            }
            
        </div>
    )
}

export default MyServices

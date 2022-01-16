import React from 'react'
import styled from 'styled-components';



const Vendor = ({vendor}) => {
    const colors=["#626f1aB1","#E3C2A0B1", "#AF8C3EB1"]
    const VendorBox = styled.div`
        background-color: ${ (props)=> colors[props.bg%3]};
        padding: 1rem ;
        border-radius: 0.5rem;
        &:hover{
            transform: scale(1);

        }
        
    `;
    return (
        <div className='col-sm-4 '>
            <VendorBox bg={vendor.id}  className=' row h-100 align-items-center col-11 mr-auto'>
            <div className='col-8 '>
                <h6 className='font-weight-bolder'>{vendor.title}</h6>
                <p className='mb-0'>{vendor.location}</p>

 
            </div>
            <div className='col-4'>
                <img className='vendorImg' src={vendor.logo} alt={vendor.title}/>

            </div>


        </VendorBox>
        </div>
    )
}

export default Vendor

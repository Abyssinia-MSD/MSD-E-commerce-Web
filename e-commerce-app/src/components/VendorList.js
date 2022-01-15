import { Button } from '@mui/material'
import React from 'react'
import { vendorList } from '../data'
import Vendor from './Vendor'
import { useState } from 'react'
import styled from 'styled-components'


const VendorList = () => {
    
    
    
    return (
        <div className='row  position-relative slider-container flex-nowrap px-5 py-3'>
            {vendorList.map((item)=>(
                <Vendor vendor={item} key={item.id}/>
            ))}
            
            

            
            
        </div>
    )
}

export default VendorList

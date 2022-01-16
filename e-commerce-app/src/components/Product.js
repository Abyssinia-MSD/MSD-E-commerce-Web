import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductItem= styled.div`
    background-image: url(${ (props)=> props.bg}) ;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 60vh;
    border: 1px solid #af8b3e9c;
    border-radius: 0.5rem;

    position: relative;
`

const Product = ({item}) => {
    const [favorited, setFavorited]= useState(false)
    return (
        <div className='col-sm-4 p-5 m-0'>
            <ProductItem className='pitem' bg={item.image} >

                <div className='price-box' >
                    <h5>{item.price}</h5>
                </div>
                
                    <div className=' flex-column m-0 p-link justify-content-center bg-tran w-100 h-100 align-items-center'>
                        <Link className='p-2 circle-icon bg-white' to={`/product/${item.id}`} >       
                            <LocalMallOutlinedIcon htmlColor='#AF8C3E'></LocalMallOutlinedIcon>  
                        </Link>
                        <div className='p-2 circle-icon bg-white' onClick={()=>{setFavorited(
                             !favorited
                        )}}>
                            {favorited ? <FavoriteIcon htmlColor='#AF8C3E'/>: <FavoriteBorderIcon htmlColor='#AF8C3E'/>}

                        </div>
                        
                        

                    </div>
                

            </ProductItem>
        </div>
    )
}

export default Product

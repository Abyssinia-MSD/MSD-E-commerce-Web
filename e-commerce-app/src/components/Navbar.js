import React from 'react'
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'



const Navbar = () => {
    const cart = useSelector(state => state.cart)
    console.log(cart)
    return (
        <div className='row p-3 px-5 align-items-center justify-content-between'>
            <div className='col-6'>
                <Link to="/">
                    <h3 className='font-weight-bolder'>CuSho</h3>
                </Link>


            </div>
            
            <div className='col-6 d-flex nav-det justify-content-end'>
               
                <Badge badgeContent={4} className='bg-cusho'>
                    <LocalMallOutlinedIcon htmlColor='#00000045' />
                </Badge>
                <Link to="/register"><p>Sign Up</p></Link>
                <p>Login</p>
            
                
            </div>
        </div>
            
        
    )
}

export default Navbar

import React from 'react'
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'



const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    
    return (
        <div className='row p-3 px-5 bg-white align-items-center justify-content-between'>
            <div className='col-6'>
                <Link to="/">
                    <h3 className='font-weight-bolder'>Abyssinia</h3>
                </Link>


            </div>
            
            <div className='col-6 d-flex nav-det justify-content-end'>
               
                <Link to="/cart">
                    <Badge badgeContent={quantity} className='bg-cusho'>
                        <LocalMallOutlinedIcon htmlColor='#00000045' />
                    </Badge>
                </Link>
                <Link to="/register"><p>Sign Up</p></Link>
                <Link to="/login"><p>Login</p></Link>
            
                
            </div>
        </div>
            
        
    )
}

export default Navbar

import React from 'react'
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <div className='row p-3 px-5 align-items-center justify-content-between'>
            <div className='col-6'>
                <h3 className='font-weight-bolder'>CuSho</h3>


            </div>
            
            <div className='col-6 d-flex nav-det justify-content-end'>
                <SearchIcon/>
                <Badge badgeContent={4} color="primary">
                    <LocalMallOutlinedIcon color="action" />
                </Badge>
                <Link to="/register"><p>Sign Up</p></Link>
                <p>Login</p>
            
                
            </div>
        </div>
            
        
    )
}

export default Navbar

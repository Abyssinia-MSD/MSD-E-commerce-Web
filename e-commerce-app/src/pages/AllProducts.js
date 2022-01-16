import React from 'react'
import { useLocation } from 'react-router-dom'

import { categoryList } from '../data'
import SearchIcon from '@mui/icons-material/Search';
import { Products } from '../data'
import SectionHeader from '../components/SectionHeader'
import ProductList from '../components/ProductList'
import { useState } from 'react'

const AllProducts = () => {
    const location= useLocation()
    const pathname= location.pathname.split('/')
    const categ = pathname.length ===3? true : false;
    const catType = {category: pathname[2]}
    
    const [filters, setfilters] = useState({})
    const handleFilters = (e) => {
        const val = e.target.value;
        setfilters({
            ...filters, 
            [e.target.name]:val,
        })
    }
   
    return (
        <div>
        
            <SectionHeader title={categ? pathname[2] : "Our Products"} subtitle="View some of our best products"/>
            <div className='row px-5 py-2'>
                <div className='col-sm-6 justify-content-start row'>
                    {
                        categ? '' : <select className='p-2 mr-2 col-sm-4 ' name="category" onChange={handleFilters}>
                        {categoryList.map((items)=>(
                            <option key={items.id} value={items.title}>{items.title}</option>
                        ))}

                    </select>
                    }
                    <select className='p-2 mr-2 d-none col-sm-4 ' name="size" onChange={handleFilters}>
                        {categoryList.map((items)=>(
                            <option key={items.id} value={items.title}>{items.title}</option>
                        ))}

                    </select>

                </div>
                <div className='col-sm-6  align-items-center  row'>
                    <div className='row p-2 border border-dark rounded '>
                        <input name="name" placeholder='Search by Product Name' className='col-10 border-0' onChange={handleFilters}></input>
                        <div className=' col-2 d-flex align-items-center p-0 justify-content-end text-right'><SearchIcon/></div>
                    </div>
                    
                    

                </div>
            
            
            </div>
            <div className='pr-5'>
                <ProductList limit={"all"} filters={filters} category={categ ? catType: ''}/>
            </div>
        </div>
    )
}

export default AllProducts

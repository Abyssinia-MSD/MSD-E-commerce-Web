import React from 'react'
import { Link } from 'react-router-dom'
import { Products } from '../data'
import Product from './Product'
import { useState,useEffect } from 'react'

const ProductList = ({limit,filters,category}) => {
    const productList= category===''? Products : ( Products.filter((item)=>
    Object.entries(category).every(([key,value]) => 
    item[key].includes(value)
)))
    const [filterdData, setfilterdData] = useState(productList)
    useEffect(() => {
        setfilterdData(
            productList.filter((item)=>
                Object.entries(filters).every(([key,value]) => 
                item[key] ==="name"? item[key].toLowerCase().match(value.toLowerCase()) : item[key].includes(value)
            ))
        );
    }, [filters])
    
    return (
        
        <div className='row align-items-center '>
            {filterdData.slice(0, limit==="all"? filterdData.length : limit).map((item)=>(
                 <Product item={item} key={item.id}/>
            ))}
            {filterdData.length>6 & category==='' && filters===''?  <Link to={'/products'}>
                <div className='viewMore mx-auto'>
                    <h6 className='mb-0'>View More </h6>
                </div>
            </Link>
              : ''}
            { filterdData.length ===0 ? <div className='py-5 px-2'> <h4 className='text-center'>No Products Yet !</h4> </div> : ''

            }
        </div>
    )
}

export default ProductList

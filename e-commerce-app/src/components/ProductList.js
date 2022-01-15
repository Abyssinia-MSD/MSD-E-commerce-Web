import React from 'react'
import { Products } from '../data'
import Product from './Product'

const ProductList = () => {
    return (
        <div className='row align-items-center '>
            {Products.map((item)=>(
                <Product item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default ProductList

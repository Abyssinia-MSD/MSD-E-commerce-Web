import React from 'react'
import { Link } from 'react-router-dom'
import { Products } from '../data'
import Product from './Product'
import { useState,useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchProducts } from '../redux/productRedux'
import axios from 'axios'






const ProductList = ({limit,filters,category}) => {
    // const dispatch= useDispatch()

    // const fetch =async()=>{
    //     try {
    //         const res= await axios.get('https://pokeapi.co/api/v2/pokemon/squirtle/');
    //         console.log(res.data)
    //         dispatch(fetchProducts(res.data))
            
    //     } catch (error) {
            
    //     }
    // }
    // fetch()
    // const products = useSelector(state => state.products.allProducts)
    const products= Products
    const productList= category===''? products : ( products.filter((item)=>
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
    }, [filters, productList])
    
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

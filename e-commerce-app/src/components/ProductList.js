import React from 'react'
import { Link } from 'react-router-dom'
import { Products } from '../data'
import Product from './Product'
import { useState,useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchProducts } from '../redux/productRedux'
import axios from 'axios'






const ProductList = ({limit,filters,category}) => {
    const fetchUrl= 'http://127.0.0.1:8000/product_list/'
    const dispatch= useDispatch()
    useEffect(() => {
        const fetch =async()=>{
            try {
                const res= await axios.get(fetchUrl);
              
                dispatch(fetchProducts(res.data))
                
            } catch (error) {
                
            }
        }
        fetch()
        
    }, [fetchUrl,dispatch])
  
    
    const products = useSelector(state => state.products.allProducts)
   
   
        const [productList, setproductList] = useState(products)
        useEffect(() => {
            setproductList(
                category===''? products : ( products.filter((item)=>
                Object.entries(category).every(([key,value]) => 
                value.toString()===item[key].toString()
            )))
            );
        }, [category, products])
    const [filterdData, setfilterdData] = useState(productList)
    useEffect(() => {
        setfilterdData(
            productList.filter((item)=>
                Object.entries(filters).every(([key,value]) => 
                key ==="name"? item[key].toLowerCase().match(value.toLowerCase()) : value.toString()===item[key].toString()
            ))
        );
    }, [filters, productList])
    
    return (
        
        <div className='row align-items-center '>
            {filterdData.slice(0, limit==="all"? filterdData.length : limit).map((item)=>(
                 <Product item={item} key={item.id}/>
            ))}
            {filterdData.length>1 & category==='' && filters===''?  <Link to={'/products'}>
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

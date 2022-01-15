import React from 'react'
import Alert from '../components/Alert'
import Categories from '../components/categories'
import Navbar from '../components/Navbar'
import Onboarding from '../components/Onboarding'
import ProductList from '../components/ProductList'
import SectionHeader from '../components/SectionHeader'
import VendorList from '../components/VendorList'

const Home = () => {
    return (
        <div>
            <Alert/>
            <Navbar/>
            <Onboarding/>
            <Categories/>
            <SectionHeader title="Find your favorite shop" subtitle="The best shops from all around ethiopia."/>
            <VendorList/>
            <SectionHeader title="Our Products" subtitle="View some of our best products"/>
            <ProductList/>

            
        </div>
    )
}

export default Home

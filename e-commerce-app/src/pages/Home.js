import React from 'react'
import Alert from '../components/Alert'
import Categories from '../components/categories'
import Navbar from '../components/Navbar'
import Onboarding from '../components/Onboarding'

const Home = () => {
    return (
        <div>
            <Alert/>
            <Navbar/>
            <Onboarding/>
            <Categories/>
           
        </div>
    )
}

export default Home

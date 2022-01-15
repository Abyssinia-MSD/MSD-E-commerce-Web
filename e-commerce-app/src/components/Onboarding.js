import { Button } from '@mui/material'
import React from 'react'
import { onboarding } from '../data'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel' 

const ImgContainer = styled.div`
    position: absolute;
    width: 60%;
    margin-top: 15%;
    height: 70%;
    z-index: -1;
    margin-left: 20%; 
    display: block;
    border: 2px solid #${(props)=>props.border};
`;

const Onboarding = () => {
    return (
        <div className='row o-row align-items-center'>
            <Carousel>
                {onboarding.map((item)=>(
                    
                    <Carousel.Item interval={3000} key={item.id}>
                        <div className='row align-items-center'> 
                            <div className='col-sm-8 position-relative'>
                                
                                <ImgContainer border={item.bColor}>
                                    
                                </ImgContainer>
                                <img className='d-block mx-auto' src={item.image} alt={item.title}/>
                            
                            </div>
                            <div className='col-sm-4'>
                                <h2>{item.title}</h2>
                                <p>{item.subtitle}</p>
                                <Button>Start Shopping <ArrowForwardIcon/></Button>

                                
                            </div>
                        </div>
                   
                    </Carousel.Item>
                    

                

                ))}
            </Carousel>

            
        </div>
    )
}

export default Onboarding


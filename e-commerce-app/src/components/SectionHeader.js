import React from 'react'


const SectionHeader = ({title, subtitle}) => {
    
    return (
        <div className='px-5 py-3'>
            <h3 className='font-weight-bold'>{title}</h3>
            <p>{subtitle}</p>
        </div>
    )
}

export default SectionHeader

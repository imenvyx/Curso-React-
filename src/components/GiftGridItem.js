import React from 'react'

const GiftGridItem = ({ title, url }) => {
    return (
        <div className='gridItem-container animate__animated animate__fadeIn'>            
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default GiftGridItem

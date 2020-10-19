import React from 'react'

function WindBnb({photo, beds, city}) {
    return (
        <div>
            <p>{city}</p>
            <img 
            className="card--image" 
            src={photo}
            alt={'poster'}
            />
        </div>
    )
}

export default WindBnb;
import React from 'react'
import WindBnb from './WindBnb'
import Stays from '../stays.json'
console.log(Stays)

function App() {
    return (
        <>
        <header>
            <h1>WindBNB</h1>
        </header>
        {Stays.map(stay => (
        <WindBnb 
        beds={stay.beds}
        key={stay.photo}
        photo={stay.photo}
        city={stay.city}
        country={stay.country}
        maxGuests={stay.maxGuests}
        rating={stay.rating}
        superHost={stay.superHost}
        title={stay.title}
        type={stay.type}
        />))}
        </>
    )
}

export default App
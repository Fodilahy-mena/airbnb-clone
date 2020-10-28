import React, { useEffect, useState } from 'react'
import WindBnb from './WindBnb'
import StaysData from '../stays.json'
console.log(StaysData);

const input = document.querySelector('.search');
const select = document.querySelector('.filter');
const addFilter = document.querySelector('.add');
// const valueOfGuest = document.querySelector('.add');

function App() {
    const [stays, setStays] = useState([]);
    const [cities, setCities] = useState('');
    // search filter
    const [titles, setTitles] = useState('');
    const [types, setTypes] = useState("");
    const [maxNumberGuests, setMaxGuests] = useState('');
    const [guestFilter, setGuestFilter] = useState({
        adults: 0,
        children: 0,
    })
    // console.log(handleSubmit())

    function fetchStays() {
        const res = StaysData;
        console.log(res);
        setStays(res);
    }

    useEffect(() => {
        fetchStays();
     }, [])

    function filterCity(e) {
        e.preventDefault();
        console.log(e.target.value);
        setCities(e.target.value);
        setTitles(e.target.value);
        setTypes(e.target.value);
        setMaxGuests(e.target.value);
        
    }


    select.addEventListener('change', filterCity);
    input.addEventListener('keyup', filterCity)
    addFilter.addEventListener('change', filterCity);
    
    return (
        <>
        <header>
            <h1>Stays in Finland</h1>
            <p className="length"></p>
        </header>
        <div className="container">
            {stays.filter(stay => stay.city.toLowerCase().includes(cities.toLowerCase()) 
            || stay.title.toLowerCase().includes(titles.toLowerCase())
            || stay.type.toLowerCase().includes(types.toLowerCase()) 
            || stay.maxGuests >= maxNumberGuests
            )
            .map((stay, i)=> (
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
            length={i + 1 <= 1 ?  i + 1 + " stay" : i + 1 + " stays"} 
            />))
            
            }
        </div>
        </>
    )
}

export default App
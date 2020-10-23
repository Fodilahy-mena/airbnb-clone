import React, { useState } from 'react'

function Popup() {
    const popupFilterBnb = document.querySelector('.popup');
    popupFilterBnb.classList.add('open');

    const [ countAdults, setAdults ] = useState(0);
    const [ countChildren, setChildren ] = useState(0);
    return (
        <div className="outer--filter"> 
            <div className="inner--filter">
                <div className="filter--card">
                    <input className="select--city" type="button"/>
                    <nav className="option displayNone">
                        <p defaultValue="Helsinki">Helsinki</p>
                        <p defaultValue="Turku">Turku</p>
                        <p defaultValue="Vaasa">Vaasa</p>
                        <p defaultValue="Oulu">Oulu</p>
                    </nav>
                </div>
                <div className="filter--card">
                    <input id="addNumberOfGuests" value={countAdults + countChildren} className="select--guest" type="button"/>
                    <nav className="option displayNone">
                        <div>
                            <strong>Adults</strong>
                            <br/>
                            <span>Ages 13 or above</span>
                            <br/>
                            <div className="button--parent">
                                <button onClick={() => setAdults(countAdults + 1)}>+</button>
                                <h4>{countAdults}</h4>
                                <button onClick={() => setAdults(countAdults - 1)}>-</button>
                            </div>
                        </div>
                        <div>
                            <strong>Children</strong>
                            <br/>
                            <span>Ages 2-12</span>
                            <br/>
                            <div className="button--parent">
                                <button onClick={() => setChildren(countChildren + 1)}>+</button>
                                <h4>{countChildren}</h4>
                                <button onClick={() => setChildren(countChildren - 1)}>-</button>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="filter--card">
                    <div className="filter--search">
                        <input className='add' type="search" placeholder="Search"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup
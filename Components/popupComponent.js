import React from 'react'

function Popup() {
    const popupFilterBnb = document.querySelector('.popup');
    popupFilterBnb.classList.add('open');
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
                    <input id="" className="select--guest" type="button"/>
                    <nav className="option displayNone">
                        <div>
                            <strong>Adults</strong>
                            <br/>
                            <span>Ages 13 or above</span>
                            <br/>
                            <div className="button--parent">
                                <button>+</button>
                                    <h4>0</h4>
                                <button>-</button>
                            </div>
                        </div>
                        <div>
                            <strong>Children</strong>
                            <br/>
                            <span>Ages 2-12</span>
                            <br/>
                            <div className="button--parent">
                                <button>+</button>
                                    <h4>0</h4>
                                <button>-</button>
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
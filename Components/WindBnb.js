import React from 'react'

function WindBnb({
    beds,
    photo,
    city,
    country, 
    maxGuests,
    rating,
    superHost,
    title,
    type,
    length}) {
    const itemLength = document.querySelector('.length');
    itemLength.innerHTML = length;
    // console.log(JSON.stringify(maxGuests));
    return (
        <div className="bnb--card">
            <img 
            className="card--image" 
            src={photo}
            alt={'poster'}
            />
            <article>
                <div className="superhost">
                    {!superHost ? <button className="btn--superhost">Super host</button> : ''}
                    <p className="bnb--type">{type} {beds ? beds + ` ${beds <= 1 ? 'bed' : 'beds'}` : ''}</p>
                    <span className="rating">{rating}</span>
                </div>
                <p className="bnb--desc">{title}</p>
            </article>
        </div>
    )
}

export default WindBnb;
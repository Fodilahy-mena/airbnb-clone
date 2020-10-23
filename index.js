import React from 'react'
import ReactDom from 'react-dom'
import App from './Components/App'
import Popup from './Components/popupComponent'
const addFilter = document.querySelector('.add');
const popupFilterBnb = document.querySelector('.popup');

ReactDom.render(<App/>, document.getElementById('root'));
ReactDom.render(<Popup/>, document.getElementById('popup'));

function filters() {
    popupFilterBnb.classList.add('show');
    const allCards = document.querySelectorAll('.inner--filter');
        const displayedNones = document.querySelectorAll('.option');
        console.log(allCards)
        allCards.forEach(card => {
            card.addEventListener('click', function() {
                console.log("Clicked")
                displayedNones.forEach(display => {
                    display.classList.remove('displayNone');
                })
            })
        })

        
}
addFilter.addEventListener('click', filters);

const handleClick = e => {
	const isOutside = !e.target.closest('.outer--filter');
	if (isOutside) {
		popupFilterBnb.classList.remove('show');
	}
};

const handleEscape = e => {
	if (e.key === 'Escape') {
		popupFilterBnb.remove('show');
	}
};

window.addEventListener('keydown', handleEscape);
popupFilterBnb.addEventListener('click', handleClick);
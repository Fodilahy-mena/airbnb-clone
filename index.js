import React from 'react'
import ReactDom from 'react-dom'
import App from './Components/App'
const input = document.querySelector('.search');
function filter() {
    let keyWord = document.querySelector('.search').value;
    let stays = document.querySelector('.container');
    for (let i = 0; i < stays.length; i++) {
        let txt = stays.divs[i].text;
        if (!txt.match(keyWord)) {
            $(stays.divs[i]).attr('sisplay', 'none').hide();
        } else {
            $(stays.divs).removeAttr('display').show();
        }

    }
}
input.addEventListener('change', filter);
input.addEventListener('keyup', filter);

ReactDom.render(<App/>, document.getElementById('root'));
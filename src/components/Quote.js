import React from 'react'

function Quote(props) {
    return (
        <div id='mainQuote'>
            <p className='quoteContentText'>{props.quoteTxt}<br></br><span id='authorTxt'>{props.authorTxt}</span></p>
        </div>
    );
}

export default Quote;
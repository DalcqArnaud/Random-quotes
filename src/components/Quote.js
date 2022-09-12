import React from 'react'

function Quote(props) {
    return (
        <div id='mainQuote' className='quoteContent'>
            <p className='quoteContentText'>{props.quoteTxt}<br></br><span id='authorTxt'>{props.authorTxt}</span></p>
            <div className='quoteContentImage'></div>
        </div>
    );
}

export default Quote;
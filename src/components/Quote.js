import React from 'react'

function Quote(props) {
    return (
        <div className='quoteContent'>
            <p>{props.quoteTxt}</p>
        </div>
    );
}

export default Quote;
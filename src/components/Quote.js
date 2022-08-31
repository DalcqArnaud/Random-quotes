import React from 'react'

function Quote(props) {
    return (
        <div className='quoteContent'>
            <p>{props.quote}</p>
        </div>
    );
}

export default Quote;
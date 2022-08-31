import React from 'react'

function Modal(props) {
    return ( 
        <div className='modal'>
            <input type="textarea">{props.quoteTxt}</input>
            <div className='btnContainer'>
                <button className='btn'>Cancel</button>
                <button className='btn'>Confirm</button>
            </div>
        </div>
    );
}

export default Modal;
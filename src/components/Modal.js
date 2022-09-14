import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Modal(props) {
    function cancel(){
        props.onCancel();
    }
    
    function confirm(){
        if(newQuote === "" || newQuote === null){
            console.log("new Quote not valid");
        }
        else{
            props.editedQuote(newQuote);
        }

        if(newAuthor === "" || newAuthor === null){
            console.log("new Author not valid");
        }
        else{
            props.editedAuthor(newAuthor);
        }
    }

    const [newQuote, setNewQuote] = useState(props.quoteTxt);
    const handleQuoteChange = event => {
        setNewQuote(event.target.value);
    }

    const [newAuthor, setNewAuthor] = useState(props.authorTxt);
    const handleAuthorChange = event => {
        setNewAuthor(event.target.value);
    }

    return ( 
        <div className='modal'>
            <p className='modalTitle'>Quote :</p>
            <textarea className='modalQuote' rows='5' defaultValue={props.quoteTxt} onChange={handleQuoteChange}/>
            <p className='modalTitle'>Author :</p>
            <textarea className='modalQuote' rows='1' defaultValue={props.authorTxt} onChange={handleAuthorChange}/>
            <div className='modalBtnContainer'>
                <button className='modalBtn' id='modalCancelBtn' onClick={cancel}>Cancel <FontAwesomeIcon icon={faXmark} /></button>
                <button className='modalBtn' id='modalConfirmBtn' onClick={confirm}>Confirm <FontAwesomeIcon icon={faCheck} /></button>
            </div>
        </div>
    );
}

export default Modal;
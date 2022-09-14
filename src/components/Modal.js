import React, {useState} from 'react';

function Modal(props) {
    function cancel(){
        console.log("Canceled");
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
            <p>Quote :</p>
            <textarea className='modalQuote' rows='5' defaultValue={props.quoteTxt} onChange={handleQuoteChange}/>
            <p>Author :</p>
            <textarea className='modalQuote' rows='1' defaultValue={props.authorTxt} onChange={handleAuthorChange}/>
            <div className='modalBtnContainer'>
                <button className='btn' onClick={cancel}>Cancel</button>
                <button className='btn' onClick={confirm}>Confirm</button>
            </div>
        </div>
    );
}

export default Modal;
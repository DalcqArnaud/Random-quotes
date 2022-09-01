import React, {useState} from 'react';

function Modal(props) {
    function cancel(){
        console.log("Canceled");
        props.onCancel();
    }
    
    function confirm(){
        console.log("Confirmed");
        if(newQuote === "" || newQuote === null){
            console.log("new Quote not valid");
        }
        else{
            props.childToParent(newQuote);
        }
    }

    const [newQuote, setNewQuote] = useState('newQuote');
    const handleChange = event => {
        setNewQuote(event.target.value);
        console.log('value is:', event.target.value);
    }

    return ( 
        <div className='modal'>
            <input type="textarea" defaultValue={props.quoteTxt} onChange={handleChange}/>
            <div className='btnContainer'>
                <button className='btn' onClick={cancel}>Cancel</button>
                <button className='btn' onClick={confirm}>Confirm</button>
            </div>
        </div>
    );
}

export default Modal;
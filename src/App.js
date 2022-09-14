import React, {useState, useEffect} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faDice } from '@fortawesome/free-solid-svg-icons'

import Quote from './components/Quote'
import Modal from './components/Modal';
import Backdrop from './components/Backdrop'

function App() {

  var url = "https://type.fit/api/quotes";
  var quotesArray = [];
  var randomQuoteIndex = 0;
  
  const [quoteString, setQuoteString] = useState("");
  const [quote, setQuote] = useState("");
  const [authorString, setAuthorString] = useState("");
  const [author, setAuthor] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [quoteTimeOut, setQuoteTimeOut] = useState(null);
  const [authorTimeOut, setAuthorTimeOut] = useState(null);
  
  useEffect(() => {
    generate();
  },[]);

  useEffect(() => {
    let newQuote = "";
    let textArray = quoteString;
    let delai = 100;
    let speed = 30;
    clearTimeout(quoteTimeOut);

    if(quoteString.length > 0){
      for(let i = 0; i < quoteString.length; i++){                
          let randomTimeOffset = Math.random() * speed;
  
          delai += randomTimeOffset;
  
          setQuoteTimeOut(
            setTimeout(() =>{
              newQuote += textArray[i];
              setQuote(newQuote);
            }, delai)
          );
      }
    }
  },[quoteString]);

  useEffect(() => {
    let newAuthor = "";
    let textArray = authorString;
    let delai = 100;
    let speed = 100;
    clearTimeout(authorTimeOut);

    if(authorString.length > 0){
      for(let i = 0; i < authorString.length; i++){                
          let randomTimeOffset = Math.random() * speed;
  
          delai += randomTimeOffset;
  
          setAuthorTimeOut(
            setTimeout(() =>{
              newAuthor += textArray[i];
              setAuthor(newAuthor);
            }, delai)
          );
      }
    }
  },[authorString]);

  async function generate(){
    await fetch(url)
    .then(response => response.json())
    .then(data => {
      quotesArray = data;
      randomQuoteIndex = Math.round(Math.random() * quotesArray.length)
      let quoteText = '"' + quotesArray[randomQuoteIndex].text + '"';
      let authorText = " - " + (quotesArray[randomQuoteIndex].author == null ? "Unknown author" : quotesArray[randomQuoteIndex].author);
      clearTimeout(quoteTimeOut);
      clearTimeout(authorTimeOut);
      setQuoteString(quoteText);
      setAuthorString(authorText);
    });
  }

  function edit(){
    setModalIsOpen(true);
  }

  function closeModal(){
    setModalIsOpen(false);
  }

  const editedQuote = (childData) => {
    setQuoteString(childData);
    closeModal();
  }

  const editedAuthor = (childData) => {
    setAuthorString(childData);
    closeModal();
  }

  return (
    <div className='quoteContainer'>
      <p id='mainTitle'>"Quotes Randomizer"</p>
      <Quote quoteTxt={quote} authorTxt={author}/>
      <div className='btnContainer'>
        <button className='btn' onClick={generate}><span className='btnContent'>Generate <FontAwesomeIcon icon={faDice} /></span></button>
        <button className='btn' onClick={edit}><span className='btnContent'>Edit <FontAwesomeIcon icon={faPenToSquare} /></span></button>
      </div>
      { modalIsOpen ? <Modal quoteTxt={quoteString} authorTxt={authorString} onCancel={closeModal} editedQuote={editedQuote} editedAuthor={editedAuthor}/> : null }
      { modalIsOpen ? <Backdrop close={closeModal}/> : null }
    </div>
    
  );
}

export default App;

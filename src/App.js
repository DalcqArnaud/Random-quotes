import React, {useState, useEffect} from 'react';

import Quote from './components/Quote'
import Modal from './components/Modal';
import Backdrop from './components/Backdrop'

function App() {

  var url = "https://type.fit/api/quotes";
  var quotesArray = [];
  var randomQuoteIndex = 0;
  
  const [quote, setQuote] = useState('"This is the default quote."');
  const [author, setAuthor] = useState("- Default Author");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  useEffect(() => {
    generate();
  },[]);

  function generate(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
      quotesArray = data;
      randomQuoteIndex = Math.round(Math.random() * quotesArray.length)
      let quoteText = '"' + quotesArray[randomQuoteIndex].text + '"';
      let authorText = " - " + (quotesArray[randomQuoteIndex].author == null ? "Unknown author" : quotesArray[randomQuoteIndex].author);
      setQuote(quoteText);
      setAuthor(authorText);
    });
  }

  function edit(){
    setModalIsOpen(true);
  }

  function closeModal(){
    setModalIsOpen(false);
  }

  const childToParent = (childData) => {
    setQuote(childData);
    closeModal();
  }

  return (
    <div className='quoteContainer'>
      <p id='mainTitle'>Quotes Randomizer</p>
      <Quote quoteTxt={quote} authorTxt={author}/>
      <div className='btnContainer'>
        <button className='btn' onClick={generate}>Generate</button>
        <button className='btn' onClick={edit}>Edit</button>
      </div>
      { modalIsOpen ? <Modal quoteTxt={quote} onCancel={closeModal} childToParent={childToParent}/> : null }
      { modalIsOpen ? <Backdrop close={closeModal}/> : null }
    </div>
    
  );
}

export default App;

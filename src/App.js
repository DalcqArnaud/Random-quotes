import React from 'react'

import Quote from './components/Quote'
import Modal from './components/Modal';
import Backdrop from './components/Backdrop'

function App() {

  function generate(){
    console.log("Generate!");
  }
  function edit(){
    console.log("Edit!");
  }

  return (
    <div className='quoteContainer'>
      <Quote quote='Test Quote - Arnaud Dalcq'/>
      <button className='btn' onClick={generate}>Generate</button>
      <button className='btn' onClick={edit}>Edit</button>
      <Modal quoteTxt='Test Quote - Arnaud Dalcq'/> ///////////////////////////// FIX ATTRIBUT /////////////////////////////////////
      <Backdrop/>
    </div>
    
  );
}

export default App;

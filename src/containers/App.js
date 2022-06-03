import React, { Component, useEffect, useState } from 'react';
import './App.css';
import {InputForm} from './InputForm';
import {TranslateData, GetLocalTranslations, AddLocalTranslation, EditLocalTranslations, DeleteLocalTranslations} from '../apis/Translate';
import { OutputText } from './OutputText';
import { LocalTable } from './LocalTable';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaFPhAzSXaizhiqS7TCcwBl__HCS5cCEc",
  authDomain: "react-translator-app.firebaseapp.com",
  projectId: "react-translator-app",
  storageBucket: "react-translator-app.appspot.com",
  messagingSenderId: "739140817683",
  appId: "1:739140817683:web:21a463a7018ab7e24200e6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  //State Data
  const [selectedType, setSelectedType] = useState('default');
  const [input,setinput] = useState('');
  const [outputContents,setOutputContents] = useState({
        text: '',
        translated: '',
        translation: ''
    })
  const [localData,setLocalData] = useState([]);

//Grab JSON local data on render
  useEffect(() => {
    GetLocalTranslations()
    .then(localTranslations => setLocalData(localTranslations)); 
  }, [localData.length])

//Save to JSON and update localData state
  function saveLocalData(translation) {
    AddLocalTranslation(translation)
    .then(setLocalData([...localData,translation]))
  }

  function editLocalData(translation) {
    EditLocalTranslations(translation)
    .then(setLocalData([...localData,translation]))
  }

  function deleteLocalData(id) {
    DeleteLocalTranslations(id)
    .then(setLocalData(localData.filter(data => data.id !== id)))
  }

  function handleLike(translation) {
    let index = localData.findIndex(x => x.id === translation.id)
    let tempTranlation = translation
    let tempLocalData = localData
    if (translation.like === false || translation.like === undefined) {
      tempTranlation.like = true  
      tempLocalData[index] = tempTranlation
      setLocalData(tempLocalData)
      console.log(tempTranlation.id)
      EditLocalTranslations(tempTranlation)
  }
    else 
    tempLocalData[index].like = false
    setLocalData(tempLocalData)
    console.log(tempTranlation.id)
    EditLocalTranslations(tempTranlation)
    
  }

//Input form handle type change and update selectedType state  
  function handleTypeChange (event) {
      setSelectedType(event)
  }

//Input form handle Submit and get external translation data
  function handleSubmit(event) {
      event.preventDefault()
      if (selectedType === 'default')
      return alert("Please choose a lanaguage first");
      else
      TranslateData(selectedType,input)
      .then(data => setOutputContents(data.contents))
      //.then(data => console.log(data))
  }

//Input form handle input form change and set state
  function handleInputChange(event) {
      setinput(event)
  }



  return (
    <div className="App">
      <InputForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} handleTypeChange={handleTypeChange} selectedType={selectedType} />
      {outputContents.text !== '' &&  <OutputText outputContents={outputContents} saveLocalData={saveLocalData} />}
      <LocalTable localData={localData} editLocalData={editLocalData} deleteLocalData={deleteLocalData} handleLike={handleLike} />
    </div>
  );
}

export default App;
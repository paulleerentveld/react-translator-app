import React, { Component, useState } from 'react';

export function OutputText (props) {
        
    return ( 
        <div>
          <h1>Translation Type: {props.outputContents.translation}</h1>
          <h1>Input Text: {props.outputContents.text}</h1>
          <h1>Translated Output: {props.outputContents.translated}</h1>
          <button onClick={() => props.saveLocalData(props.outputContents)} >Save to Local Data</button>
        </div>
     );
}


import React, { Component, useState } from 'react';


export function InputForm (props) {
        


  
    return ( 
        
        <form onSubmit={(event) => props.handleSubmit(event)}>
                <label>Translator Type:
                    <select value={props.selectedType} onChange={(event) => props.handleTypeChange(event.target.value)} className="form-select form-select mb-3" aria-label=".form-select-lg example">
                        <option value='default' disabled hidden>Choose a language...</option>
                        <option value="yoda">Yoda</option>
                        <option value="pirate">Pirate</option>
                        <option value="minion">Minion</option>
                        <option value="hodor">Hodor</option>
                        <option value="vulcan">Vulcan</option>
                        <option value="australian">Australian</option>
                        <option value="dothraki">Dothraki</option>
                        <option value="valyrian">Valyrian</option>
                    </select>
                </label>
                <label>Phrase to Translate:
                    <input onChange={(event) => props.handleInputChange(event.target.value)} type="text" name="inputText" className="form-control" aria-describedby="translateInput" placeholder="Enter the phrase you want to be translated" />
                </label>

                <button type="submit" className="btn btn-primary">Submit</button>

        </form>
     );
}


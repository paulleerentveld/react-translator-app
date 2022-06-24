import React from 'react';



//Live fetch to translate phrase, **Note limited to 5 requests per hour
export function TranslateData(type,input) {
    return fetch(`https://api.funtranslations.com/translate/${type}.json?text=${input}`) 
        .then(response => response.json())
        .then((data) => data)
        .catch(function(err) {
            console.log('Error: ' + err);
            alert('Error: ' + err);
          });
}

//Fetch local JSON Data for table
export function GetLocalTranslations() {
    return fetch(`http://localhost:3001/translations`) 
        .then(response => response.json())
        .then((data) => data)
}

//POST to local JSON data
export function AddLocalTranslation(translation) {
    return fetch('http://localhost:3001/translations',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(translation)
    })
}

//Edit (PATCH) to lcoal JSON data
export function EditLocalTranslations(translation) {
    return fetch(`http://localhost:3001/translations/${translation.id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(translation)
    })
}

//Delete from local JSON data
export function DeleteLocalTranslations(id) {
    return fetch(`http://localhost:3001/translations/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })


}
import React from 'react';




export function TranslateData(type,input) {
    //Live fetch, **Note limited to 5 requests per hour
    return fetch(`https://api.funtranslations.com/translate/${type}.json?text=${input}`) 
        .then(response => response.json())
        .then((data) => data)
        .catch(function(err) {
            console.log('Error: ' + err);
            alert('Error: ' + err);
          });
}


export function GetLocalTranslations() {
    return fetch(`http://localhost:3001/translations`) 
        .then(response => response.json())
        .then((data) => data)
        .catch(function(err) {
            console.log('Error: ' + err);
            alert('Error: ' + err);
          });
}

export function AddLocalTranslation(translation) {
    return fetch('http://localhost:3001/translations',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(translation)
    })
}


export function EditLocalTranslations(translation) {
    return fetch(`http://localhost:3001/translations/${translation.id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(translation)
    })
}

export function DeleteLocalTranslations(id) {
    return fetch(`http://localhost:3001/translations/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })


}


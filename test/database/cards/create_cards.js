import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const createCardFunction = httpsCallable(functions, 'create_card');

const data = {
    "canvas_id": "0asdf01",
    "card_id": "sdfgID1",
    "title": "Carsd 1",
    "content": "This is a sple sgfdcard.",
    "position": { x: 100, y: 200 },
    "nodes": { north: true, south: true, west: true, east: true }
};

createCardFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
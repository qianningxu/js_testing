import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const createCardFunction = httpsCallable(functions, 'create_card');

const data = {
    "canvas_id": "canvasID1",
    "card_id": "cardID1",
    "title": "Card 1",
    "content": "This is a sample card.",
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
import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const updateCardFunction = httpsCallable(functions, 'update_card');

const data = {
    "canvas_id": "canvasID1",
    "card_id": "sdfgID1",
    "update_data": {
        "title": "example card",
        "content": "Thisa sple sgfdcard.",
        'measured': {
            width: 32,
            height: 202,
        },
        "position": { x: 100, y: 200 },
        "nodes": { north: true, south: true, west: true, east: true }
    }
};

updateCardFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
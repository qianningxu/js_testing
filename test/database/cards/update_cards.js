import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const updateCardFunction = httpsCallable(functions, 'update_card');

const data = {
    "canvas_id": "canvasID1",
    "card_id": "cardID1",
    "update_data": {
        "title": "Updated Card Title",
        "content": "Updated content of the card.",
        "position": { x: 150, y: 250 }  // New position
    }
};

updateCardFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
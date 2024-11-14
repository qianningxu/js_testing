import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const readCardFunction = httpsCallable(functions, 'read_card');

const data = {
    "canvas_id": "canvasID1",
    "card_id": "cardID1"
};

readCardFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
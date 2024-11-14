import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const deleteCardFunction = httpsCallable(functions, 'delete_card');

const data = {
    "canvas_id": "canvasID1",
    "card_id": "cardID1"
};

deleteCardFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
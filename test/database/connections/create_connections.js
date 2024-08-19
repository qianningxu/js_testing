import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const createConnectionFunction = httpsCallable(functions, 'create_connection');

const data = {
    "canvas_id": "canvasID1",
    "connection_id": "connectionID1",
    "from_card_id": "cardID1",
    "to_card_id": "cardID2",
    "from_node": "north",
    "to_node": "south"
};

createConnectionFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
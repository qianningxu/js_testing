import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const updateConnectionFunction = httpsCallable(functions, 'update_connection');

const data = {
    "canvas_id": "canvasID1",
    "connection_id": "connectionID1",
    "update_data": {
        "from_node": "east",  // Updated node
        "to_node": "west"
    }
};

updateConnectionFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
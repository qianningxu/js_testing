import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const deleteConnectionFunction = httpsCallable(functions, 'delete_connection');

const data = {
    "canvas_id": "canvasID1",
    "connection_id": "connectionID1"
};

deleteConnectionFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
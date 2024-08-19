import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const readCanvasFunction = httpsCallable(functions, 'read_canvas');

const data = {
    "canvas_id": "001" // Specify the canvas_id of the canvas you want to read
};

readCanvasFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
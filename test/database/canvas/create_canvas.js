import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const createCanvasFunction = httpsCallable(functions, 'create_canvas');

const data = {
    "canvas_id": "001",  // Specify the unique canvas ID
    "user_id": "123456", // Reference to the users
    "title": "My First Canvas" // Title of the canvas
};

createCanvasFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
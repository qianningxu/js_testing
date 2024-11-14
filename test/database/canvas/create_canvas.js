import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const createCanvasFunction = httpsCallable(functions, 'create_canvas');

const data = {
    "canvas_id": "canvasID14",  // Specify the unique item ID (formerly canvas_id)
    "user_id": "123456", // Reference to the users
    "title": "My Canvas Title",  // Title of the canvas
    "type": "canvas",  // New field to specify the type
    "parent_id": null  // Optional: Specify parent folder ID, null if top-level
};

createCanvasFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });

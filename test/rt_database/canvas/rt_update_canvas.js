import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const updateCanvasFunction = httpsCallable(functions, 'update_canvas');

const data = {
    "canvas_id": "0asdf02", // Specify the canvas_id of the canvas you want to update
    "update_data": {
        "title": "Updated Canvas Title" // New title to update
    }
};

updateCanvasFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
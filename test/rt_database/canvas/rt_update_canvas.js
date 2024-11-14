import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const updateCanvasFunction = httpsCallable(functions, 'canvas_curd_operations');

const data = {
    "methods_type": "rt_update_canvas",
    "data": {
        "canvas_id": "0asdf02", // Specify the canvas_id of the canvas you want to update
        "update_data": {
            "user_id": "123456",
            "title": "Updated Canvas Title" // New title to update
        }
    }
};

updateCanvasFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const createCanvasFunction = httpsCallable(functions, 'canvas_curd_operations');

const data = {
    "methods_type": "rt_create_canvas",
    "data": {
        "canvas_id": "canvas4",  // Specify the unique item ID (formerly canvas_id)
        "user_id": "test_user", // Reference to the users
        "title": "My Canvas Title",  // Title of the canvas
        "parent_id": "folder2"  // Optional: Specify parent folder ID, null if top-level
    }
};

createCanvasFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });

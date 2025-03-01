import { functions } from '../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const readCanvasFunction = httpsCallable(functions, 'canvas_curd_operations');

const data = {
    "methods_type": "rt_read_canvas",
    "data": {
        "user_id": "123",
        "canvas_id": "canvas2" // Specify the canvas_id of the canvas you want to read
    }
};

readCanvasFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';


const deleteCanvasFunction = httpsCallable(functions, 'canvas_curd_operations');

const data = {
    "methods_type": "rt_delete_canvas",
    "data": {
        "user_id": "123456",
        "canvas_id": "canvasID7" // Specify the canvas_id of the canvas you want to delete
    }
    
};

deleteCanvasFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
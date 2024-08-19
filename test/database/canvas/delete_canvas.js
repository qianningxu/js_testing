import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const deleteCanvasFunction = httpsCallable(functions, 'delete_canvas');

const data = {
    "canvas_id": "001" // Specify the canvas_id of the canvas you want to delete
};

deleteCanvasFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
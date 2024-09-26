import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const readGroupFunction = httpsCallable(functions, 'read_frame');

const data = {
    "canvas_id": "canvasID1",
    "frame_id": "frameID2"
};

readGroupFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
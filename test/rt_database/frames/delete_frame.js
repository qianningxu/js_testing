import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const deleteGroupFunction = httpsCallable(functions, 'delete_frame');

const data = {
    "canvas_id": "canvasID1",
    "frame_id": "frameID2"
};

deleteGroupFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
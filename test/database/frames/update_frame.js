import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const updateGroupFunction = httpsCallable(functions, 'update_frame');

const data = {
    "canvas_id": "canvasID1",
    "frame_id": "frameID2",
    "update_data": {
        'direction': "vertical"
    }
};

updateGroupFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
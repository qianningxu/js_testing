import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const createGroupFunction = httpsCallable(functions, 'create_frame');

const data = {
    "canvas_id": "canvasID1",
    "frame_id": "frameID2",
    "name": "frame 1",
    'alignment': "vertical",
    'measured': { width: 32, height: 202 },
    "position": { x: 100, y: 200 },
    "card_ids": []
};

createGroupFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
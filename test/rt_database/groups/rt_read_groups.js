import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const readGroupFunction = httpsCallable(functions, 'rt_read_group');

const data = {
    "canvas_id": "canvasID1",
    "group_id": "groupID1"
};

readGroupFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
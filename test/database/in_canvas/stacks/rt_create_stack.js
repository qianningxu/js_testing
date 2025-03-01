import { functions } from '../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const createGroupFunction = httpsCallable(functions, 'stack_curd_operations');

const data = {
    "methods_type": "rt_create_stack",
    "data":{
        "user_id": "123456",
        "canvas_id": "canvasID1",
        "stack_id": "stackID2",
        "name": "stack 1",
        'direction': "vertical",
        'measured': { width: 32, height: 202 },
        "position": { x: 100, y: 200 },
        "card_ids": []
    }
};

createGroupFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
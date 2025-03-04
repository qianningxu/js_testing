<<<<<<<< HEAD:test/database/users/items/canvas/stacks/rt_create_stack.js
import { functions } from '../../../../../../firebaseConfig.js';
========
import { functions } from '../../../../firebaseConfig.js';
>>>>>>>> 660d5776fab637c3f0dee9fdb8ff3faeb3be4afe:test/database/in_canvas/stacks/rt_create_stack.js
import { httpsCallable } from 'firebase/functions';

const createGroupFunction = httpsCallable(functions, 'stack_curd_operations');

const data = {
    "methods_type": "rt_create_stack",
    "data":{
        "user_id": "123",
        "canvas_id": "canvas1",
        "stack_id": "stack1",
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
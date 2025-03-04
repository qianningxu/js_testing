<<<<<<<< HEAD:test/database/users/items/canvas/stacks/rt_update_stack.js
import { functions } from '../../../../../../firebaseConfig.js';
========
import { functions } from '../../../../firebaseConfig.js';
>>>>>>>> 660d5776fab637c3f0dee9fdb8ff3faeb3be4afe:test/database/in_canvas/stacks/rt_update_stack.js
import { httpsCallable } from 'firebase/functions';

const updateStackFunction = httpsCallable(functions, 'stack_curd_operations');

const data = {
    "methods_type": "rt_update_stack",
    "data":{
        "user_id": "123",
        "canvas_id": "canvas1",
        "stack_id": "stack1",
        "update_data": {
            'direction': "vertical"
        }
    }
};

updateStackFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const updateStackFunction = httpsCallable(functions, 'stack_curd_operations');

const data = {
    "methods_type": "rt_update_stack",
    "data":{
        "user_id": "123456",
        "canvas_id": "canvasID1",
        "stack_id": "stackID1",
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
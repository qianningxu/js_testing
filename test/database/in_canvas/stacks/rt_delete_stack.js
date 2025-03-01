import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const deleteStackFunction = httpsCallable(functions, 'stack_curd_operations');

const data = {
    "methods_type": "rt_delete_stack",
    "data":{
        "user_id": "123456",
        "canvas_id": "canvasID1",
        "stack_id": "stackID1"
    }
};

deleteGroupFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
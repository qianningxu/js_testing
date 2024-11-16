import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const readGroupFunction = httpsCallable(functions, 'group_curd_operations');

const data = {
    "methods_type": "rt_read_group",
    "data": {
        "user_id": "123456",
        "canvas_id": "canvasID1",
        "group_id": "groupID1"
    }
};

readGroupFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
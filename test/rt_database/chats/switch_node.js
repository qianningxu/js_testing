import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const switchNodeFunction = httpsCallable(functions, 'chat_crud_operations');

const data = {
    "methods_type": "rt_switch_node",
    "data": {
        "user_id": "test_user",
        "canvas_id": "canvasID1",
        "chat_id": "chat1",
        "node_id": "new_node_id" // Node ID to switch to
    }
};

switchNodeFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
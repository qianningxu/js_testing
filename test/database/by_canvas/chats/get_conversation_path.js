import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const getPathFunction = httpsCallable(functions, 'chat_crud_operations');

const data = {
    "methods_type": "rt_get_conversation_path",
    "data": {
        "user_id": "test_user",
        "canvas_id": "canvasID1",
        "chat_id": "chat1",
        "node_id": "node_id_to_trace" // Get path from root to this node
    }
};

getPathFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
        if (responseData.status === 'Success') {
            console.log('Conversation path:', JSON.stringify(responseData.path, null, 2));
        }
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
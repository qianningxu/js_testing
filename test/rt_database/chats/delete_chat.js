import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const deleteChatFunction = httpsCallable(functions, 'chat_crud_operations');

const data = {
    "methods_type": "rt_delete_chat",
    "data": {
        "user_id": "test_user",
        "canvas_id": "canvasID1",
        "chat_id": "chat1"
    }
};

deleteChatFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
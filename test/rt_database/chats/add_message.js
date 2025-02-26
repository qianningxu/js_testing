import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const addMessageFunction = httpsCallable(functions, 'chat_crud_operations');

const data = {
    "methods_type": "rt_add_message",
    "data": {
        "user_id": "test_user",
        "canvas_id": "canvasID1",
        "chat_id": "chat1",
        "message": {
            "role": "assistant",
            "content": "This is a response to your message.",
            "timestamp": Date.now()
        }
    }
};

addMessageFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
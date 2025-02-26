import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const readChatFunction = httpsCallable(functions, 'chat_crud_operations');

const data = {
    "methods_type": "rt_read_chat",
    "data": {
        "user_id": "test_user",
        "canvas_id": "canvasID1",
        "chat_id": "chat1"
    }
};

readChatFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
        if (responseData.status === 'Success') {
            console.log('Chat data:', JSON.stringify(responseData.data, null, 2));
        }
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
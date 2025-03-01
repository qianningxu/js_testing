import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const updateChatFunction = httpsCallable(functions, 'chat_crud_operations');

const data = {
    "methods_type": "rt_update_chat",
    "data": {
        "user_id": "test_user",
        "canvas_id": "canvasID1",
        "chat_id": "chat1",
        "update_data": {
            "title": "Updated Chat Title"
        }
    }
};

updateChatFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
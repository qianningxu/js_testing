import { functions } from '../../../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const updateChatFunction = httpsCallable(functions, 'chat_crud_operations');

const data = {
    "methods_type": "rt_update_chat",
    "data": {
        "user_id": "123",
        "canvas_id": "canvas1",
        "chat_id": "bf2be144-bd10-4b6a-900e-6e101e6a05d9",
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
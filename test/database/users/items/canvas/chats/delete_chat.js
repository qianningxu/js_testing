import { functions } from '../../../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const deleteChatFunction = httpsCallable(functions, 'chat_crud_operations');

const data = {
    "methods_type": "rt_delete_chat",
    "data": {
        "user_id": "123",
        "canvas_id": "canvas1",
        "chat_id": "0b600ab2-dbf7-4e31-8e12-816fdcd2fd52"
    }
};

deleteChatFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
import { functions } from '../../../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const readChatFunction = httpsCallable(functions, 'chat_crud_operations');

const data = {
    "methods_type": "rt_read_chat",
    "data": {
        "user_id": "123",
        "canvas_id": "canvas1",
        "chat_id": "0b600ab2-dbf7-4e31-8e12-816fdcd2fd52"
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
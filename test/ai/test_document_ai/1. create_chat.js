import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const createChatFunction = httpsCallable(functions, 'chat_crud_operations');

const data = {
    "methods_type": "rt_create_chat",
    "data": {
        "user_id": "123",
        "canvas_id": "canvas1",
        "title": "Test afs",
        "message": {
            "content": 'Hello, how can I help you today?',
            "role": 'assistant'
          }
    }
};

createChatFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
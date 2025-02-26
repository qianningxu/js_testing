import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const createChatFunction = httpsCallable(functions, 'chat_crud_operations');

const data = {
    "methods_type": "rt_create_chat",
    "data": {
        "user_id": "test_user",
        "canvas_id": "canvasID1",
        "chat_id": "chat1", // Optional, will generate UUID if not provided
        "title": "Test Conversation",
        "messages": [
            {
                "role": "user",
                "content": "Hello, this is a test message.",
                "timestamp": Date.now()
            }
        ]
    }
};

createChatFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
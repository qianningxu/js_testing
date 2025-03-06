import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const createChatFunction = httpsCallable(functions, 'document_chat_operations');

const data = {
    "methods_type": "add_documents_to_chat",
    "data": {
        "user_id": "123",
        "canvas_id": "canvas1",
        "chat_id": "aadb3860-f44f-451f-a5e4-31d056b557d1",
        "pdf_ids": ["1741040536"]
    }
};

createChatFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const documentQueryFunction = httpsCallable(functions, 'document_chat_operations');

const data = {
    "methods_type": "process_document_query",
    "data": {
        "user_id": "123",
        "canvas_id": "canvas1",
        "chat_id": "aadb3860-f44f-451f-a5e4-31d056b557d1",
        "content": "How many GitHub stars did AFFiNE get and how quickly?",
        "pdf_ids": ["1741040536"]
    }
};

documentQueryFunction(data)
    .then(({ data: responseData }) => {
        console.log('Query processed successfully:', responseData);
    })
    .catch(error => {
        console.error('Error processing query:', error);
    });
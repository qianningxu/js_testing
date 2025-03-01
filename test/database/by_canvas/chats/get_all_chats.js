import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const getCanvasChatsFunction = httpsCallable(functions, 'chat_crud_operations');

const data = {
    "methods_type": "rt_get_canvas_chats",
    "data": {
        "user_id": "test_user",
        "canvas_id": "canvasID1"
    }
};

getCanvasChatsFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
        
        if (responseData.status === 'Success') {
            console.log(`Retrieved ${responseData.chats.length} chats from canvas.`);
            console.log('Complete response in JSON format:', JSON.stringify(responseData, null, 2));
        } else {
            console.error('Unexpected status in response:', responseData.status);
        }
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
import { functions } from '../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const editMessageBranchFunction = httpsCallable(functions, 'chat_crud_operations');

const data = {
    "methods_type": "rt_edit_message_and_branch",
    "data": {
        "user_id": "test_user",
        "canvas_id": "canvasID1",
        "chat_id": "chat1",
        "node_id": "node123", // The ID of the node containing the message to edit
        "message_index": 1,   // Index of the message to edit (0-based)
        "new_message": {
            "role": "user",
            "content": "This is my edited message that will create a new branch.",
            "timestamp": Date.now()
        }
    }
};

editMessageBranchFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
        console.log('New branch created with node ID:', responseData.new_node_id);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
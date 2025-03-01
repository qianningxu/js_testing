import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const updateGroupFunction = httpsCallable(functions, 'group_curd_operations');

const data = {
    "methods_type": "rt_update_group",
    "data": {
        "user_id": "123456",
        "canvas_id": "canvasID1",
        "group_id": "groupID1",
        "update_data": {
            "name": "Updated Group 1",
            "card_ids": ["cardID2", "cardID3"],
            "title": "Updated Title"
        }
    }
};

updateGroupFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
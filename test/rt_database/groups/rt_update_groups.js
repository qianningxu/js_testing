import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const updateGroupFunction = httpsCallable(functions, 'rt_update_group');

const data = {
    "canvas_id": "canvasID1",
    "group_id": "groupID1",
    "update_data": {
        "name": "Updated Group 1",
        "card_ids": ["cardID2", "cardID3"]
    }
};

updateGroupFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
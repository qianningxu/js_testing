import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const createGroupFunction = httpsCallable(functions, 'create_group');

const data = {
    "canvas_id": "canvasID1",
    "group_id": "groupID1",
    "name": "Group 1",
    "card_ids": ["cardID1", "cardID3"]
};

createGroupFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
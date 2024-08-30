import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const createGroupFunction = httpsCallable(functions, 'create_group');

const data = {
    "canvas_id": "canvasID1",
    "group_id": "groupID2",
    "name": "Group 1",
    'measured': { width: 32, height: 202 },
    "position": { x: 100, y: 200 },
    "nodes": { north: true, south: true, west: true, east: true },
    "card_ids": []
};

createGroupFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
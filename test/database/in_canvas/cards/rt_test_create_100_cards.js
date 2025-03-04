import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const createCardFunction = httpsCallable(functions, 'card_curd_operations');

for (let i = 1; i <= 100; i++) {
    const data = {
        "methods_type": "rt_create_card",
        "data": {
            "user_id": "123456",
            "canvas_id": "canvasID1",
            "card_id": `card${i}`,
            "title": "example card",
            "content": "This is a sample card.",
            "measured": {
                width: 32,
                height: 202
            },
            "position": { x: 100, y: 200 },
            "nodes": { north: true, south: true, west: true, east: true }
        }
    };

    createCardFunction(data)
        .then(({ data: responseData }) => {
            console.log(`Function call successful for card${i}:`, responseData);
        })
        .catch(error => {
            console.error(`Error calling the function for card${i}:`, error);
        });
}
import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const updateCardFunction = httpsCallable(functions, 'card_curd_operations');

const data = {
    "methods_type": "rt_update_card",
    "data": {
        "user_id": "123456",
        "canvas_id": "canvasID1",
        "card_id": "card1",
        "update_data": {
            "title": "example card",
            "content": "Thisa sple sgfdcard.",
        'measured': {
            width: 32,
            height: 202,
            },
            "position": { x: 100, y: 200 }
        }
    }
};

updateCardFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
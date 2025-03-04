import { functions } from '../../../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const createCardFunction = httpsCallable(functions, 'card_curd_operations');

const data = {
    "methods_type": "rt_create_card",
    "data": {
        "user_id": "123",
        "canvas_id": "canvas1",
        "card_id": "card3",
        "title": "example card",
        "content": "Thisa sple sgfdcard.",
        'measured': {
            width: 32,
            height: 202
        },
        "position": { x: 100, y: 200 }
    }
};

createCardFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
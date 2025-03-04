<<<<<<<< HEAD:test/database/users/items/canvas/cards/rt_update_cards.js
import { functions } from '../../../../../../firebaseConfig.js';
========
import { functions } from '../../../../firebaseConfig.js';
>>>>>>>> 660d5776fab637c3f0dee9fdb8ff3faeb3be4afe:test/database/in_canvas/cards/rt_update_cards.js
import { httpsCallable } from 'firebase/functions';

const updateCardFunction = httpsCallable(functions, 'card_curd_operations');

const data = {
    "methods_type": "rt_update_card",
    "data": {
        "user_id": "123",
        "canvas_id": "canvas1",
        "card_id": "card1",
        "update_data": {
            "width": 1
        },
        'measured': {
            width: 32,
            height: 202,
            },
            "position": { x: 100, y: 200 }
        }
    };

updateCardFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
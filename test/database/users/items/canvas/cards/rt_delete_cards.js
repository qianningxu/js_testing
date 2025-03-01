import { functions } from '../../../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const deleteCardFunction = httpsCallable(functions, 'card_curd_operations');

const data = {
    "methods_type": "rt_delete_card",
    "data": {                       
        "user_id": "123",
        "canvas_id": "canvas1",
        "card_id": "card1"
    }
};

deleteCardFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
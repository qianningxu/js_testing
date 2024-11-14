import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const createConnectionFunction = httpsCallable(functions, 'connection_curd_operations');

const data = {
    "methods_type": "rt_create_connection",
    "data":{
        "user_id": "123456",
        "canvas_id": "canvasID1",
        "connection_id": "connectionID7",
        "from_card_id": "card1",
        "to_card_id": "card3",
        "from_node": "north",
        "to_node": "south"
    }
};

createConnectionFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
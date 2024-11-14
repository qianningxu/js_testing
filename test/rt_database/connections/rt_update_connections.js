import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const updateConnectionFunction = httpsCallable(functions, 'connection_curd_operations');

const data = {
    "methods_type": "rt_update_connection",
    "data":{    
        "user_id": "123456",
        "canvas_id": "canvasID1",
        "connection_id": "connectionID7",
        "from_card_id": "cardID1",    // Added required fields
        "from_node": "east",          // Updated node
        "to_card_id": "cardID2",      // Added required fields
        "to_node": "west",            // Updated node
    }
};

updateConnectionFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });

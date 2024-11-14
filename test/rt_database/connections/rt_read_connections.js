import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const readConnectionFunction = httpsCallable(functions, 'connection_curd_operations');

const data = {
    "methods_type": "rt_read_connection",
    "data":{
        "user_id": "123456",
        "canvas_id": "canvasID1",
        "connection_id": "connectionID7"
    }
};

readConnectionFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });
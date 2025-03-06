import { functions } from '../../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const createCanvasFunction = httpsCallable(functions, 'canvas_curd_operations');

const data = {"methods_type":"rt_create_canvas","data":{"canvas_id":"canvas_1741177940533","title":"Untitled","parent_id":"root","type":"canvas","user_id":"QDUppO3NtRRwHGp9N5sPTCcpvIU2"}};

createCanvasFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });

import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Define the Cloud Function that you want to call
const getCanvasStacksFunction = httpsCallable(functions, 'stack_curd_operations');

// Specify the test data, particularly the canvas_id
const data = {
    "methods_type": "rt_get_canvas_stacks",
    "data":{
        "user_id": "123456",
        "canvas_id": "canvasID1"  // Replace with the correct canvas ID
    }
};

// Call the function with the specified data
getCanvasStacksFunction(data)
    .then(({ data: responseData }) => {
        // Convert the response to a JSON string with proper formatting
        const jsonResponse = JSON.stringify(responseData, null, 2);

        // Log the successful response in JSON format
        console.log('Function call successful:', jsonResponse);
    })
    .catch(error => {
        // Log any errors that occur during the function call
        console.error('Error calling the function:', error);
    });

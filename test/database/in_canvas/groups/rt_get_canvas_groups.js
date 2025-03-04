import { functions } from '../../../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Define the Cloud Function that you want to call
const getCanvasGroupsFunction = httpsCallable(functions, 'group_curd_operations');

// Specify the test data, particularly the canvas_id
const data = {
    "methods_type": "rt_get_canvas_groups", 
    "data": {
        "user_id": "123",
        "canvas_id": "canvas1"  // Replace with the correct canvas ID
    }
};

// Call the function with the specified data
getCanvasGroupsFunction(data)
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

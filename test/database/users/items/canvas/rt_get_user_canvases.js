import { functions } from '../../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Define the Cloud Function that you want to call
const getUserCanvasesFunction = httpsCallable(functions, 'canvas_curd_operations');

// Specify the test data, particularly the user_id
const data = {
    "methods_type": "rt_get_user_canvases",
    "data": {
        "user_id": "123"  // Replace with a valid user ID for testing
    }
};

// Call the function with the specified data
getUserCanvasesFunction(data)
    .then(({ data: responseData }) => {
        // Log the successful response from the function
        console.log('Function call successful:', responseData);

        // Optionally, add assertions here to validate the response
        // For example:
        if (responseData.status === 'Success') {
            console.log(`Retrieved ${responseData.canvases.length} canvases.`);
        } else {
            console.error('Unexpected status in response:', responseData.status);
        }
    })
    .catch(error => {
        // Log any errors that occur during the function call
        console.error('Error calling the function:', error);
    });

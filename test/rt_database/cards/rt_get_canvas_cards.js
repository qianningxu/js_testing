
import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Define the Cloud Function that you want to call
const getCanvasCardsFunction = httpsCallable(functions, 'card_curd_operations');

// Specify the test data, particularly the canvas_id
const data = {
    "methods_type": "rt_get_canvas_cards",
    "data": {
        "user_id": "123456",
        "canvas_id": "canvasID1"  // Update with the exact canvas ID seen in Firestore
    }
};

// Call the function with the specified data
getCanvasCardsFunction(data)
    .then(({ data: responseData }) => {
        // Log the successful response from the function
        console.log('Function call successful:', responseData);

        // Check if the response status is 'Success'
        if (responseData.status === 'Success') {
            console.log(`Retrieved ${responseData.cards.length} cards from canvas with ID ${data.canvas_id}.`);

            // Print the entire responseData object as a formatted JSON string
            console.log('Complete response in JSON format:', JSON.stringify(responseData, null, 2));
        } else {
            console.error('Unexpected status in response:', responseData.status);
        }
    })
    .catch(error => {
        // Log any errors that occur during the function call
        console.error('Error calling the function:', error);
    });

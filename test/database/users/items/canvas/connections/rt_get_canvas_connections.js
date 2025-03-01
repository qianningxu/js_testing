import { functions } from '../../../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Define the Cloud Function that you want to call
const getCanvasConnectionsFunction = httpsCallable(functions, 'connection_curd_operations');

// Specify the test data, particularly the canvas_id
const data = {
    "methods_type": "rt_get_canvas_connections",
    "data":{
        "user_id": "123",
        "canvas_id": "canvas1"  // Update with the exact canvas ID seen in Firestore
    }
};

// Call the function with the specified data
getCanvasConnectionsFunction(data)
    .then(({ data: responseData }) => {
        // Log the successful response from the function
        console.log('Function call successful:', responseData);

        // Check if the response status is 'Success'
        if (responseData.status === 'Success') {
            console.log(`Retrieved ${responseData.connections.length} connections from canvas with ID ${data.canvas_id}.`);

            // Additional checks can be done here, for example:
            if (responseData.connections.length > 0) {
                responseData.connections.forEach(connection => {
                    console.log(`Connection ID: ${connection.id}, From Card ID: ${connection.from_card_id}, To Card ID: ${connection.to_card_id}`);
                });
            } else {
                console.log('No connections found for this canvas.');
            }
        } else {
            console.error('Unexpected status in response:', responseData.status);
        }
    })
    .catch(error => {
        // Log any errors that occur during the function call
        console.error('Error calling the function:', error);
    });

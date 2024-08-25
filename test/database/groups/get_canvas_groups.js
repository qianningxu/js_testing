import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Define the Cloud Function that you want to call
const getCanvasGroupsFunction = httpsCallable(functions, 'get_canvas_groups');

// Specify the test data, particularly the canvas_id
const data = {
    "canvas_id": "0asdf01"  // Update with the exact canvas ID seen in Firestore
};

// Call the function with the specified data
getCanvasGroupsFunction(data)
    .then(({ data: responseData }) => {
        // Log the successful response from the function
        console.log('Function call successful:', responseData);

        // Check if the response status is 'Success'
        if (responseData.status === 'Success') {
            console.log(`Retrieved ${responseData.groups.length} groups from canvas with ID ${data.canvas_id}.`);

            // Additional checks can be done here, for example:
            if (responseData.groups.length > 0) {
                responseData.groups.forEach(group => {
                    console.log(`Group ID: ${group.id}, Name: ${group.name}`);
                });
            } else {
                console.log('No groups found for this canvas.');
            }
        } else {
            console.error('Unexpected status in response:', responseData.status);
        }
    })
    .catch(error => {
        // Log any errors that occur during the function call
        console.error('Error calling the function:', error);
    });

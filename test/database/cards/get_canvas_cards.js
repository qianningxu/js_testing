import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Define the Cloud Function that you want to call
const getCanvasCardsFunction = httpsCallable(functions, 'get_canvas_cards');

// Specify the test data, particularly the canvas_id
const data = {
    "canvas_id": "0asdf01"  // Update with the exact canvas ID seen in Firestore
};


// Call the function with the specified data
getCanvasCardsFunction(data)
    .then(({ data: responseData }) => {
        // Log the successful response from the function
        console.log('Function call successful:', responseData);

        // Check if the response status is 'Success'
        if (responseData.status === 'Success') {
            console.log(`Retrieved ${responseData.cards.length} cards from canvas with ID ${data.canvas_id}.`);

            // Additional checks can be done here, for example:
            if (responseData.cards.length > 0) {
                responseData.cards.forEach(card => {
                    console.log(`Card ID: ${card.id}, Title: ${card.title}`);
                });
            } else {
                console.log('No cards found for this canvas.');
            }
        } else {
            console.error('Unexpected status in response:', responseData.status);
        }
    })
    .catch(error => {
        // Log any errors that occur during the function call
        console.error('Error calling the function:', error);
    });

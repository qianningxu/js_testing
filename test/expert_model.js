import { functions } from '../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Reference to the callable function
const testFunction = httpsCallable(functions, 'expert_model_api')

const data = {
    "question": "How did China rise up in the 21th century?"
};

// Convert the data object to a JSON string
const jsonData = JSON.stringify(data);

testFunction(jsonData)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
        // You can handle the response data here, such as updating the UI
    })
    .catch(error => {
        console.error('Error calling the function:', error);
        // You can handle errors here, such as displaying an error message to the user
    });
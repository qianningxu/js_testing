import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Reference to the callable function
const testFunction = httpsCallable(functions, 'start_writing_api')

const data = {
    "requirement": "How did china rise in 2000s",

};

// Convert the data object to a JSON string
// const jsonData = JSON.stringify(data);

testFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
        // You can handle the response data here, such as updating the UI
    })
    .catch(error => {
        console.error('Error calling the function:', error);
        // You can handle errors here, such as displaying an error message to the users
    });
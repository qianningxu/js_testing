import { functions } from '../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Reference to the callable function
const testFunction = httpsCallable(functions, 'test_function');

// Data to be sent to the function
const data = {
    data: {
        name: "John Doe",
        email: "john.doe@example.com",
        message: "Hello, this is a test!"
    }
};

// Call the function and handle the response
testFunction(data)
    .then(({ data: { status, message, received_data: { name, email, message: receivedMessage } } }) => {
        console.log({ status, message, received_data: { name, email, message: receivedMessage } });
    })
    .catch((error) => {
        console.error("Error calling function:", error);
    });

import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Reference to the callable function
const testFunction = httpsCallable(functions, 'create_user')

const data = {
    "user_id": "123456",
    "name": "John Doe",
    "email": "johndoe@example.com"
};

testFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
        // You can handle the response data here, such as updating the UI
    })
    .catch(error => {
        console.error('Error calling the function:', error);
        // You can handle errors here, such as displaying an error message to the users
    });
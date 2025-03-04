import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Reference to the callable function
const updateUserFunction = httpsCallable(functions, 'user_curd_operations');

const data = {
    "methods_type": "rt_update_user",
    "data":{
        "user_id": "123", // Specify the user_id of the users you want to update
        "update_data": {
            "name": "Jane Doe", // New name to update
            "email": "janedoe@example.com" // New email to update
        }
    }
};

updateUserFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
        // Handle the response data here, such as confirming update success
    })
    .catch(error => {
        console.error('Error calling the function:', error);
        // Handle errors here, such as displaying an error message
    });
import { functions } from '../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Reference to the callable function
const readUserFunction = httpsCallable(functions, 'user_curd_operations');

const data = {
    "methods_type": "rt_read_user",
    "data":{
        "user_id": "123" // Specify the user_id of the users you want to read
    }
};

readUserFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
        // Handle the response data here, such as displaying the users details
    })
    .catch(error => {
        console.error('Error calling the function:', error);
        // Handle errors here, such as displaying an error message
    });
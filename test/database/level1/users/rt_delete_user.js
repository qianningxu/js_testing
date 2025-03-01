import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Reference to the callable function
const deleteUserFunction = httpsCallable(functions, 'user_curd_operations');

const data = {
    "methods_type": "rt_delete_user",
    "data":{
        "user_id": "123456" // Specify the user_id of the users you want to delete
    }
};

deleteUserFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
        // Handle the response data here, such as confirming deletion success
    })
    .catch(error => {
        console.error('Error calling the function:', error);
        // Handle errors here, such as displaying an error message
    });
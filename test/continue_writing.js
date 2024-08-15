import { functions } from '../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Reference to the callable function
const testFunction = httpsCallable(functions, 'continue_writing_api')

const data = {
    "previous": "The Rise of China: A Decade of Unprecedented Growth (2000-2010)**\\\\\\\\n China's emergence as a global superpower in the 2000s was a phenomenon that caught the attention of economists, policymakers, and scholars worldwide. The country's remarkable transformation from a centrally planned economy to a market-oriented one, coupled with its strategic integration into the global economy, laid the foundation for a decade of unprecedented growth."
};

testFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
        // You can handle the response data here, such as updating the UI
    })
    .catch(error => {
        console.error('Error calling the function:', error);
        // You can handle errors here, such as displaying an error message to the user
    });
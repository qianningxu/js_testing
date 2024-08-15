import { functions } from '../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Reference to the callable function
const testFunction = httpsCallable(functions, 'change_tone_api')

const data = {
    "type": "Confident",
    "original text": "AI contributes to improving diagnostics in healthcare by analyzing medical images, predicting disease outbreaks, and providing early detection of conditions like cancer. AI algorithms can process images faster and with higher accuracy than traditional methods, and can compare scans with vast databases to highlight potential issues, aiding radiologists in making more informed decisions."
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
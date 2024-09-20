import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Reference to the callable function
const testFunction = httpsCallable(functions, 'card_split_api')

const data = {
    "Content": "In the late 20th century and into the 21st century, the rise of China can largely be attributed to significant economic reforms initiated in the late 1970s. The shift away from a centrally planned economy towards a socialist market economy allowed for unprecedented levels of foreign investment and the growth of the private sector. By opening up to the world, China not only created millions of jobs but also became a global manufacturing hub. This transition facilitated a rapid increase in GDP, lifted hundreds of millions out of poverty, and laid the groundwork for China’s substantive influence on the global stage in the 21st century."
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
        // You can handle errors here, such as displaying an error message to the users
    });
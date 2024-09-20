import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Reference to the callable function
const testFunction = httpsCallable(functions, 'card_merge_api')

const data = [
    "In the late 20th century and into the 21st century, the rise of China can largely be attributed to significant economic reforms initiated in the late 1970s. The shift away from a centrally planned economy towards a socialist market economy allowed for unprecedented levels of foreign investment and the growth of the private sector. By opening up to the world, China not only created millions of jobs but also became a global manufacturing hub. This transition facilitated a rapid increase in GDP, lifted hundreds of millions out of poverty, and laid the groundwork for China’s substantive influence on the global stage in the 21st century.",
    "The rise of China in the 21st century is also inherently connected to globalization and trade dynamics. China's accession to the World Trade Organization in 2001 was a pivotal moment. It provided China with access to international markets and led to a rapid export-led growth model. While this growth has benefited China economically, it has also reshaped global supply chains and trade patterns, thus increasing China's leverage and integration within the global economy. This interplay between domestic reform and effective engagement in global trade has been significant in elevating China’s status in the 21st century.",
    "China's rise in the 21st century is not solely economic; it represents a transformative shift in global geopolitical dynamics. With the economic growth came increased military capabilities and a more assertive foreign policy. China's Belt and Road Initiative is a strategic move to enhance its influence in Asia and beyond, establishing infrastructure ties with numerous countries. This long-term investment strategy has allowed China to expand its soft power and build critical partnerships, altering the balance of power in international relations."
];


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